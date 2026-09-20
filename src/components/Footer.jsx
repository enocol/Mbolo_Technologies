import mark from "../assets/mbolo-mark.webp";
import { company, footerLinks } from "../data/site";

// See Header: `base` keeps the in-page anchors working from a sub-page.
export default function Footer({ base = "" }) {
  const year = new Date().getFullYear();
  const to = (href) => (href.startsWith("#") ? `${base}${href}` : href);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a className="brand" href={to("#top")}>
              <span className="brand__mark" aria-hidden="true">
                <img src={mark} width="120" height="120" alt="" loading="lazy" decoding="async" />
              </span>
              <span>
                <span className="brand__name">{company.name}</span>
                <span className="brand__sub">SARL · Cameroon</span>
              </span>
            </a>
            <p className="footer__about">
              {company.tagline} Custom software for businesses across Cameroon and Africa,
              and the team behind Mbolo Eats.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={to(link.href)}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {company.legalName}. All rights reserved.
          </span>
          <span>
            {company.city} · <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
