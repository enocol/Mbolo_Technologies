import Header from "./Header";
import Footer from "./Footer";

/**
 * Shared shell for the pages under /legal: masthead, contents, numbered
 * sections. Each page supplies only its own text.
 *
 * `base="/"` on the header and footer turns their in-page anchors into
 * "/#contact" so they jump back to the home page rather than to a section
 * that does not exist here.
 */

/** Marks a value that is not settled yet, so it cannot be missed on the page. */
export function Todo({ children }) {
  return <span className="legal__todo">{children}</span>;
}

const pad = (n) => String(n).padStart(2, "0");

export default function LegalPage({ title, standfirst, meta = [], note, sections }) {
  return (
    <>
      <Header base="/" />
      <main className="legal">
        <div className="container">
          <header className="legal__masthead">
            <span className="eyebrow">Legal</span>
            <h1>{title}</h1>
            <p className="legal__standfirst">{standfirst}</p>
            <div className="legal__meta">
              {meta.map(({ label, value }) => (
                <span key={label}>
                  <b>{label}</b> {value}
                </span>
              ))}
            </div>
          </header>

          {note && (
            <div className="legal__draft" role="note">
              <h2>{note.title}</h2>
              {note.body}
            </div>
          )}

          <div className="legal__shell">
            <nav className="legal__toc" aria-label="Contents">
              <h2>Contents</h2>
              <ol>
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>
                      <span aria-hidden="true">{pad(i + 1)}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="legal__body">
              {sections.map((section, i) => (
                <section id={section.id} key={section.id}>
                  <h2>
                    <span className="legal__num" aria-hidden="true">
                      {pad(i + 1)}
                    </span>
                    {section.title}
                  </h2>
                  {section.body}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer base="/" />
    </>
  );
}
