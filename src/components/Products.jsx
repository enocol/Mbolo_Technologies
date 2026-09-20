import Icon from "./Icon";
import { product } from "../data/site";

const menu = [
  { emoji: "🍲", name: "Ndolé & plantain", place: "Chez Mado · Akwa", eta: "25 min" },
  { emoji: "🍗", name: "Poulet DG", place: "Le Grill · Bonanjo", eta: "30 min" },
  { emoji: "🐟", name: "Poisson braisé", place: "Maré Bleu · Bali", eta: "35 min" },
];

export default function Products() {
  return (
    <section className="section section--tint" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our products</span>
          <h2>We don&apos;t only build software — we run it</h2>
          <p>
            Alongside client work, Mbolo Technologies develops and operates its own
            proprietary platforms in the Cameroonian market.
          </p>
        </div>

        <div className="product">
          <div>
            <span className="product__badge">
              <i aria-hidden="true">ME</i>
              {product.kicker}
            </span>
            <h3 style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}>{product.name}</h3>
            <p style={{ color: "var(--ink-500)" }}>{product.description}</p>

            <ul>
              {product.points.map((point) => (
                <li key={point}>
                  <Icon name="check" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="product__actions">
              <a className="btn btn--primary" href="#contact">
                Partner with Mbolo Eats
                <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn--ghost" href="#contact">
                Build a product like this
              </a>
            </div>

            <p
              style={{
                marginTop: "24px",
                fontSize: "0.92rem",
                color: "var(--ink-500)",
                borderLeft: "3px solid var(--amber-500)",
                paddingLeft: "16px",
              }}
            >
              {product.note}
            </p>
          </div>

          <div className="phone" aria-hidden="true">
            <div className="phone__screen">
              <div className="phone__bar">
                <small>Deliver to</small>
                <strong>Akwa, Douala</strong>
                <div className="phone__search">Search restaurants near you…</div>
              </div>

              <div className="phone__list">
                {menu.map((item) => (
                  <div className="phone__item" key={item.name}>
                    <span className="phone__thumb">{item.emoji}</span>
                    <span>
                      <b>{item.name}</b>
                      <span>{item.place}</span>
                    </span>
                    <em>{item.eta}</em>
                  </div>
                ))}
              </div>

              <div className="phone__cta">Track my order</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
