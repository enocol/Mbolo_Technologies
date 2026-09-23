import Icon from "./Icon";
import HeroCarousel from "./HeroCarousel";
import { heroStats } from "../data/site";

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
            <HeroCarousel />

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
