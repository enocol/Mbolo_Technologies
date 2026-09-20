import Icon from "./Icon";
import { heroStats } from "../data/site";

const orderRows = [
  { tag: "01", label: "Order received · Akwa", value: "2 min" },
  { tag: "02", label: "Courier assigned · Bonapriso", value: "On route" },
  { tag: "03", label: "Paid by Mobile Money", value: "Settled" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div>
            <span className="eyebrow eyebrow--light">Software engineering · Cameroon</span>
            <h1>
              We build the software that runs <em>African businesses</em>.
            </h1>
            <p className="hero__lead">
              Mbolo Technologies SARL designs, builds and maintains software for individuals,
              small and medium businesses, and large organisations across Cameroon and the
              wider continent — and runs its own products in the Cameroonian market.
            </p>

            <div className="hero__actions">
              <a className="btn btn--accent" href="#contact">
                Start a project
                <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn--ghost-light" href="#products">
                See Mbolo Eats
              </a>
            </div>

            <div className="hero__stats">
              {heroStats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="glass">
              <div className="hero-card__top">
                <span className="hero-card__badge" aria-hidden="true">
                  ME
                </span>
                <span>
                  <span className="hero-card__title">Mbolo Eats</span>
                  <span className="hero-card__meta">Food delivery · Cameroon</span>
                </span>
                <span className="hero-card__live">
                  <i aria-hidden="true" /> Live
                </span>
              </div>

              <div className="hero-card__rows">
                {orderRows.map((row) => (
                  <div className="hero-row" key={row.tag}>
                    <i aria-hidden="true">{row.tag}</i>
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__ticker">
              <div className="ticker-tile">
                <strong>Mobile money</strong>
                <span>MTN MoMo &amp; Orange Money, reconciled</span>
              </div>
              <div className="ticker-tile">
                <strong>FR / EN</strong>
                <span>Bilingual products by default</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
