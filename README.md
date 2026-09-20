# Mbolo Technologies SARL — Home Page

Single-page marketing site for Mbolo Technologies SARL, built with React 18 + Vite.
No UI framework and no runtime dependencies beyond React — styling is one hand-written
stylesheet with CSS custom properties.

## Run it

```bash
npm install     # already done
npm run dev     # dev server at http://localhost:5173
npm run build   # production bundle into dist/
npm run preview # serve the production build locally
```

## Structure

```
index.html              page shell, meta tags, Google Fonts
public/favicon.svg      brand mark
src/main.jsx            React entry point
src/App.jsx             section order
src/styles.css          design tokens + all component styles
src/data/site.js        ALL copy and contact details (edit this first)
src/components/
  Header.jsx            sticky nav + mobile menu
  Hero.jsx              headline, stats, Mbolo Eats live-order visual
  Services.jsx          service grid + "we build for" trust strip
  Products.jsx          Mbolo Eats spotlight with phone mockup
  WhyMbolo.jsx          differentiators + 4-step process
  Contact.jsx           contact details + project enquiry form
  Footer.jsx            link columns + legal line
  Icon.jsx              inline SVG icon set
```

## Before going live

1. **Replace the placeholders** in [src/data/site.js](src/data/site.js) — every value marked
   `PLACEHOLDER` (email, phone, WhatsApp, address) is invented and must be corrected.
2. **Serve the contact API.** The form in
   [src/components/Contact.jsx](src/components/Contact.jsx) posts JSON to
   `POST /api/contact-requests` (`name`, `company`, `email`, `phone`, `topic`, `message`).
   That path is relative: [vite.config.js](vite.config.js) proxies `/api` to
   `http://192.168.0.152:5000` for `npm run dev` and `npm run preview`, so no CORS headers
   are needed on the backend. Change that target when the API moves, and make sure the
   deployed site serves `/api` from its own origin (reverse proxy) — the Vite proxy does
   not apply to a static `dist/` build. A non-2xx response shows an error; a `message` or
   `error` field in the JSON body is displayed to the visitor.
3. **Check the stats.** The three figures in the hero (`heroStats`) are illustrative —
   replace them with numbers you can stand behind.
4. **Add real imagery** if you want photography instead of the CSS mockups (hero card,
   phone screen). Both are pure markup, so they can be swapped without touching layout.

## Design tokens

Brand colours, typography, radii and shadows are declared once at the top of
[src/styles.css](src/styles.css) under `:root`. Changing `--green-600` and `--amber-500`
re-themes the whole page.
