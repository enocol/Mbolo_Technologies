import { useState } from "react";
import Icon from "./Icon";
import { company, engagementOptions } from "../data/site";

const EMPTY = { name: "", company: "", email: "", phone: "", topic: "", message: "" };

const ENDPOINT = "/api/contact-requests";
const FALLBACK_ERROR =
  "We could not send your message. Please try again, or write to us by email.";

async function readError(response) {
  try {
    const body = await response.json();
    return body.message || body.error || FALLBACK_ERROR;
  } catch {
    return FALLBACK_ERROR;
  }
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (status === "sent" || status === "error") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

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

      setValues(EMPTY);
      setStatus("sent");
    } catch {
      setError(FALLBACK_ERROR);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div>
          <span className="eyebrow eyebrow--light">Contact</span>
          <h2>Tell us what you want to build</h2>
          <p>
            Send us a short description of your project. We reply within one business day
            with next steps — and, where it helps, a free 30-minute scoping call.
          </p>

          <div className="contact__points">
            <div className="contact__point">
              <Icon name="mail" size={20} />
              <span>
                <strong>Email</strong>
                <span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </span>
              </span>
            </div>
            <div className="contact__point">
              <Icon name="phone" size={20} />
              <span>
                <strong>Phone / WhatsApp</strong>
                <span>{company.phone}</span>
              </span>
            </div>
            <div className="contact__point">
              <Icon name="pin" size={20} />
              <span>
                <strong>Office</strong>
                <span>{company.address}</span>
              </span>
            </div>
            <div className="contact__point">
              <Icon name="clock" size={20} />
              <span>
                <strong>Working hours</strong>
                <span>{company.hours}</span>
              </span>
            </div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {status === "sent" && (
            <p className="form__success" role="status">
              <Icon name="check" size={20} />
              <span>
                Thank you — your message has been recorded. We&apos;ll come back to you within
                one business day.
              </span>
            </p>
          )}

          {status === "error" && (
            <p className="form__error" role="alert">
              {error}
            </p>
          )}

          <div className="form__row">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jean Ndoumbe"
                value={values.name}
                onChange={update("name")}
                disabled={sending}
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company (optional)</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your business"
                value={values.company}
                onChange={update("company")}
                disabled={sending}
              />
            </div>
          </div>

          <div className="form__row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={values.email}
                onChange={update("email")}
                disabled={sending}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+237 …"
                value={values.phone}
                onChange={update("phone")}
                disabled={sending}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="topic">What do you need?</label>
            <select
              id="topic"
              name="topic"
              value={values.topic}
              onChange={update("topic")}
              disabled={sending}
            >
              <option value="">Select an option</option>
              {engagementOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Project description</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="A few lines about the problem you want solved, who will use the system, and your timeline."
              value={values.message}
              onChange={update("message")}
              disabled={sending}
            />
          </div>

          <button
            className="btn btn--accent btn--block"
            type="submit"
            disabled={sending}
            aria-busy={sending}
          >
            {sending ? "Sending…" : "Send message"}
            {!sending && <Icon name="arrow" size={18} />}
          </button>

          <p className="form__note">
            Prefer email? Write to{" "}
            <a href={`mailto:${company.email}`} style={{ color: "var(--amber-400)" }}>
              {company.email}
            </a>
            . We treat every brief as confidential.
          </p>
        </form>
      </div>
    </section>
  );
}
