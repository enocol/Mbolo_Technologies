import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { company, engagementOptions } from "../data/site";

// Set VITE_CONTACT_ENDPOINT in .env (or .env.local) to point the form at another
// host. Anything VITE_-prefixed is baked into the client bundle and public, so
// this must never hold a secret. The fallback keeps the form working unset.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "/api/contact-requests";
const FALLBACK_ERROR =
  "We could not send your message. Please try again, or write to us by email.";

const DRAFT_KEY = "mbolo.contact-draft.v1";

/**
 * One question per step. `validate` returns an empty string when the answer
 * will do, or the sentence to show the visitor when it will not.
 */
const steps = [
  {
    name: "name",
    question: "First — who are we speaking to?",
    hint: "Your name, so we know how to address the reply.",
    type: "text",
    placeholder: "Jean Ndoumbe",
    autoComplete: "name",
    validate: (v) => (v.trim() ? "" : "Please tell us your name."),
  },
  {
    name: "company",
    question: "Which company are you with?",
    hint: "Leave it blank if this is a personal project.",
    type: "text",
    placeholder: "Your business",
    autoComplete: "organization",
    optional: true,
    validate: () => "",
  },
  {
    name: "email",
    question: "Where should we reply?",
    hint: "We answer within one business day.",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
    validate: (v) =>
      !v.trim()
        ? "Please give us an email address."
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
          ? ""
          : "That does not look like an email address.",
  },
  {
    name: "phone",
    question: "Is there a number we can call?",
    hint: "Optional — useful if a call would be quicker than email.",
    type: "tel",
    placeholder: "+237 …",
    autoComplete: "tel",
    optional: true,
    validate: () => "",
  },
  {
    name: "topic",
    question: "What do you need?",
    hint: "Pick the closest fit — we will work out the detail together.",
    type: "select",
    validate: (v) => (v ? "" : "Please choose the closest option."),
  },
  {
    name: "message",
    question: "Tell us about the project.",
    hint: "The problem you want solved, who will use the system, and your timeline.",
    type: "textarea",
    placeholder:
      "A few lines about the problem you want solved, who will use the system, and your timeline.",
    validate: (v) =>
      v.trim().length >= 10 ? "" : "A sentence or two is enough to get us started.",
  },
];

const EMPTY = Object.fromEntries(steps.map((s) => [s.name, ""]));

async function readError(response) {
  try {
    const body = await response.json();
    return body.message || body.error || FALLBACK_ERROR;
  } catch {
    return FALLBACK_ERROR;
  }
}

// Every storage call is wrapped: a browser in private mode, or with site data
// blocked, throws on access rather than returning null.
function readDraft() {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const draft = JSON.parse(raw);
    return draft && typeof draft.values === "object" ? draft : null;
  } catch {
    return null;
  }
}

function writeDraft(draft) {
  try {
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    /* Not being able to save a draft should never break the form. */
  }
}

function clearDraft() {
  try {
    window.localStorage.removeItem(DRAFT_KEY);
  } catch {
    /* ignore */
  }
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState("");
  const [restored, setRestored] = useState(false);
  // Until the saved draft has been read, nothing may be written back, or the
  // empty first render would wipe it.
  const [loaded, setLoaded] = useState(false);
  const fieldRef = useRef(null);
  const movedRef = useRef(false);

  const current = steps[step];
  const isLast = step === steps.length - 1;
  const sending = status === "sending";

  // Read on mount rather than during render: the page is prerendered, and
  // localStorage does not exist on the server. Reading it in render would make
  // the first client render disagree with the served HTML.
  useEffect(() => {
    const draft = readDraft();
    if (draft) {
      setValues((prev) => ({ ...prev, ...draft.values }));
      if (Number.isInteger(draft.step)) {
        setStep(Math.min(Math.max(draft.step, 0), steps.length - 1));
      }
      if (Object.values(draft.values).some((v) => String(v).trim())) setRestored(true);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded || status === "sent") return;
    const blank = Object.values(values).every((v) => !v.trim());
    if (blank) clearDraft();
    else writeDraft({ values, step, savedAt: new Date().toISOString() });
  }, [values, step, loaded, status]);

  // Focus the field when the question changes, but not on first paint — that
  // would scroll the page to the form before the visitor has asked for it.
  useEffect(() => {
    if (movedRef.current) fieldRef.current?.focus();
    movedRef.current = true;
  }, [step]);

  const setValue = (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [current.name]: value }));
    if (invalid) setInvalid("");
    if (status === "error") setStatus("idle");
  };

  const back = () => {
    setInvalid("");
    setStep((s) => Math.max(0, s - 1));
  };

  const send = async () => {
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          // The API validates topic against a fixed enum, so send the key only
          // when the visitor actually picked one.
          ...(values.topic ? { topic: values.topic } : {}),
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        setError(await readError(response));
        setStatus("error");
        return;
      }

      clearDraft();
      setValues(EMPTY);
      setStep(0);
      setRestored(false);
      setStatus("sent");
    } catch {
      setError(FALLBACK_ERROR);
      setStatus("error");
    }
  };

  // Enter in a text field submits the form, which is what advances a step. The
  // last step is the only one that actually sends.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (sending) return;

    const problem = current.validate(values[current.name]);
    if (problem) {
      setInvalid(problem);
      fieldRef.current?.focus();
      return;
    }

    if (isLast) send();
    else setStep((s) => s + 1);
  };

  const startOver = () => {
    clearDraft();
    setValues(EMPTY);
    setStep(0);
    setRestored(false);
    setInvalid("");
    // Also leaves the sent state — this is the button that returns to the
    // questions after a successful send, not only the mid-form reset.
    setStatus("idle");
    setError("");
  };

  if (status === "sent") {
    return (
      <div className="form">
        <p className="form__success" role="status">
          <Icon name="check" size={20} />
          <span>
            Thank you — your message has been recorded. We&apos;ll come back to you within one
            business day.
          </span>
        </p>
        <button className="btn btn--ghost-light btn--block" type="button" onClick={startOver}>
          Send another message
        </button>
      </div>
    );
  }

  const answered = values[current.name].trim();
  const nextLabel = isLast ? "Send message" : current.optional && !answered ? "Skip" : "Next";

  return (
    <form className="form wizard" onSubmit={handleSubmit}>
      <div className="wizard__head">
        <span className="wizard__count">
          Question {step + 1} of {steps.length}
        </span>
        <div
          className="wizard__bar"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-valuenow={step + 1}
          aria-label="Progress through the questions"
        >
          <i style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      {restored && (
        <p className="wizard__restored" role="status">
          <span>We kept your answers from last time.</span>
          <button type="button" onClick={startOver}>
            Start over
          </button>
        </p>
      )}

      {status === "error" && (
        <p className="form__error" role="alert">
          {error}
        </p>
      )}

      {/* Keyed on the step so the question is re-announced as it changes. */}
      <div className="wizard__step" key={current.name}>
        <label className="wizard__question" htmlFor={current.name}>
          {current.question}
          {current.optional && <em> (optional)</em>}
        </label>
        <p className="wizard__hint">{current.hint}</p>

        {current.type === "select" ? (
          <select
            id={current.name}
            name={current.name}
            ref={fieldRef}
            value={values[current.name]}
            onChange={setValue}
            disabled={sending}
            aria-invalid={Boolean(invalid)}
          >
            <option value="">Select an option</option>
            {engagementOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : current.type === "textarea" ? (
          <textarea
            id={current.name}
            name={current.name}
            ref={fieldRef}
            placeholder={current.placeholder}
            value={values[current.name]}
            onChange={setValue}
            disabled={sending}
            aria-invalid={Boolean(invalid)}
          />
        ) : (
          <input
            id={current.name}
            name={current.name}
            ref={fieldRef}
            type={current.type}
            placeholder={current.placeholder}
            autoComplete={current.autoComplete}
            value={values[current.name]}
            onChange={setValue}
            disabled={sending}
            aria-invalid={Boolean(invalid)}
          />
        )}

        {invalid && (
          <p className="wizard__invalid" role="alert">
            {invalid}
          </p>
        )}
      </div>

      <div className="wizard__actions">
        <button
          className="btn btn--ghost-light"
          type="button"
          onClick={back}
          disabled={step === 0 || sending}
        >
          Previous
        </button>
        <button className="btn btn--accent" type="submit" disabled={sending} aria-busy={sending}>
          {sending ? "Sending…" : nextLabel}
          {!sending && <Icon name="arrow" size={18} />}
        </button>
      </div>

      <p className="form__note">
        Your answers are kept in this browser until you send them. Prefer email? Write to{" "}
        <a href={`mailto:${company.email}`} style={{ color: "var(--accent-400)" }}>
          {company.email}
        </a>
        .
      </p>
    </form>
  );
}
