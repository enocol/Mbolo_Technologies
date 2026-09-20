import Icon from "./Icon";
import { services, trustPoints } from "../data/site";

export function TrustStrip() {
  return (
    <div className="trust">
      <div className="container trust__inner">
        <span className="trust__label">We build for</span>
        <div className="trust__items">
          {trustPoints.map((point) => (
            <span className="trust__item" key={point}>
              <Icon name="check" size={18} />
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Engineering services, end to end</h2>
          <p>
            From a first prototype for a founder to the platform a national operation depends
            on — we take the work from idea to production, and we stay for what comes after.
          </p>
        </div>

        <div className="grid grid--3">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="card__icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card__tags">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
