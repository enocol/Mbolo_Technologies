import { useEffect, useState } from "react";
import { company, nav } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu once the viewport is wide enough for the inline nav.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="container">
        <a className="brand" href="#top" aria-label={`${company.legalName} — home`}>
          <span className="brand__mark" aria-hidden="true">
            M
          </span>
          <span>
            <span className="brand__name">{company.name}</span>
            <span className="brand__sub">SARL · Cameroon</span>
          </span>
        </a>

        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--primary" href="#contact" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </nav>

        <a className="btn btn--primary header__cta" href="#contact">
          Start a project
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
