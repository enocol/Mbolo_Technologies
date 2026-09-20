import Icon from "./Icon";
import { differentiators, processSteps } from "../data/site";

export function WhyMbolo() {
  return (
    <section className="section" id="why">
      <div className="container split">
        <div>
          <span className="eyebrow">Why Mbolo</span>
          <h2>A partner that understands the market you sell into</h2>
          <p style={{ color: "var(--ink-500)" }}>
            Software that works in Douala or Yaoundé has different constraints from software
            written for Paris or New York — networks, devices, payment habits and languages
            all differ. We build with those constraints in mind from the first sketch.
          </p>
          <p style={{ color: "var(--ink-500)" }}>
            Our team works in French and English, meets clients where they are, and delivers
            systems your own staff can operate without a consultant in the room.
          </p>
          <a className="link-arrow" href="#contact">
            Talk to an engineer
            <Icon name="arrow" size={16} />
          </a>
        </div>

        <div className="feature-list">
          {differentiators.map((item) => (
            <article className="feature" key={item.title}>
              <div className="feature__icon">
                <Icon name={item.icon} size={20} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section section--tint" id="process">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--center">How we work</span>
          <h2>Four steps, no surprises</h2>
          <p>
            A predictable way of working that keeps budgets, timelines and expectations in
            the same place — visible to you at every stage.
          </p>
        </div>

        <div className="steps">
          {processSteps.map((step) => (
            <article className="step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
