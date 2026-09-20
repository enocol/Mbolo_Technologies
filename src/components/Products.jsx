import Icon from "./Icon";
import PhoneMockup from "./PhoneMockup";
import { product } from "../data/site";

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
                borderLeft: "3px solid var(--accent-500)",
                paddingLeft: "16px",
              }}
            >
              {product.note}
            </p>
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
