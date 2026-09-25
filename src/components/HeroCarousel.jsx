import { useEffect, useRef, useState } from "react";

// Vite turns each of these into a hashed, long-cacheable URL at build time.
const files = import.meta.glob("../assets/carousel-*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const WIDTHS = [400, 560, 760, 1040];

// What the carousel actually measures: the full container below the point where
// the hero stacks, then roughly 40vw until the container stops growing, then a
// fixed 504px. Without this the browser assumes 100vw and fetches the largest
// file every time.
const SIZES = "(max-width: 980px) calc(100vw - 48px), (max-width: 1228px) 40vw, 504px";

function srcSet(name, ext) {
  return WIDTHS.map((w) => {
    const url = files[`../assets/${name}-${w}.${ext}`];
    // A missing size would ship a srcset entry reading "undefined 400w", which
    // fails silently in the browser. Better to break the build.
    if (!url) throw new Error(`HeroCarousel: missing ../assets/${name}-${w}.${ext}`);
    return `${url} ${w}w`;
  }).join(", ");
}

/**
 * Hero carousel. Advances left to right every five seconds, and can also be
 * driven by the arrows or the dots.
 *
 * The slides are poster artwork with their wording baked into the pixels, so
 * each one carries an alt that says what it actually shows — otherwise the
 * whole message is invisible to a screen reader and to search.
 */
const slides = [
  {
    name: "carousel-1",
    alt: "Mbolo Technologies SARL, a software development company in Cameroon. Main services: website and web app development, mobile app development, and custom software solutions.",
  },
  {
    name: "carousel-2",
    alt: "Mbolo Technologies SARL — technology that connects, solutions that matter. Website and web app development, mobile app development and custom software for businesses in Cameroon and beyond.",
  },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const [paused, setPaused] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // Each slide is moved on its own rather than as one track. A shared track
  // would have to travel back the other way when the last slide wraps to the
  // first, which with two slides means it visibly ping-pongs; moving them
  // separately keeps every transition going the same way.
  const go = (next) => {
    const target = ((next % slides.length) + slides.length) % slides.length;
    if (target === indexRef.current) return;
    setLeaving(indexRef.current);
    setIndex(target);
  };

  useEffect(() => {
    if (paused || slides.length < 2) return;
    // Deliberately not gated on prefers-reduced-motion: Windows reports that
    // whenever desktop animations are off, which would leave the hero static on
    // a great many machines. Pausing on hover and focus, plus the arrows and
    // dots, is what keeps this controllable.
    const id = setInterval(() => go(indexRef.current + 1), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="carousel"
      aria-roledescription="carousel"
      aria-label="Mbolo Technologies"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <picture key={slide.name}>
          <source type="image/avif" srcSet={srcSet(slide.name, "avif")} sizes={SIZES} />
          <source type="image/webp" srcSet={srcSet(slide.name, "webp")} sizes={SIZES} />
          <img
            className={`carousel__slide${
              i === index ? " is-current" : i === leaving ? " is-leaving" : ""
            }`}
            src={files[`../assets/${slide.name}-760.webp`]}
            alt={slide.alt}
            width="1040"
            height="1040"
            decoding="async"
            /* loading="lazy" does nothing here: a parked slide is translated
               out of the frame but still sits inside the layout viewport, so
               the browser fetches it anyway. Priority is the lever that works —
               the first slide is what the visitor sees, the rest can queue
               behind it. */
            fetchPriority={i === 0 ? "high" : "low"}
            /* Once it has finished leaving, drop the class so the slide snaps
               back to its parked position off the left edge, ready to come in
               from that side next time. The snap happens out of sight. */
            onTransitionEnd={(e) => {
              if (e.propertyName === "transform" && i === leaving) setLeaving(null);
            }}
          />
        </picture>
      ))}

      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 5-7 7 7 7" />
        </svg>
      </button>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 5 7 7-7 7" />
        </svg>
      </button>

      <div className="carousel__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`carousel__dot${i === index ? " is-on" : ""}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1} of ${slides.length}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
