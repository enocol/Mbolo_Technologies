import { company, footerLinks } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a className="brand" href="#top">
              <span className="brand__mark" aria-hidden="true">
                M
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
                    <a href={link.href}>{link.label}</a>
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
