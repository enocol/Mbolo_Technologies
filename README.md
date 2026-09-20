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
legal/privacy-policy/   second HTML entry -> /legal/privacy-policy
public/favicon.svg      brand mark
src/main.jsx            React entry point (home)
src/legal.jsx           React entry point (privacy policy)
src/App.jsx             section order
src/styles.css          design tokens + all component styles
src/data/site.js        ALL copy and contact details (edit this first)
src/assets/             logo + imagery (Vite inlines <4KB, hashes the rest)
src/components/
  Header.jsx            sticky nav + mobile menu
  Hero.jsx              headline, stats, Mbolo Eats live-order visual
  Services.jsx          service grid + "we build for" trust strip
  Products.jsx          Mbolo Eats spotlight
  PhoneMockup.jsx       replica of the Mbolo Eats app home screen
  WhyMbolo.jsx          differentiators + 4-step process
  Contact.jsx           contact details + project enquiry form
  PrivacyPolicy.jsx     /legal/privacy-policy page
  Footer.jsx            link columns + legal line
  Icon.jsx              inline SVG icon set
```

## Before going live

1. **Replace the placeholders** in [src/data/site.js](src/data/site.js) — every value marked
   `PLACEHOLDER` (email, phone, WhatsApp, address) is invented and must be corrected.
2. **Serve the contact API.** The form in
   [src/components/Contact.jsx](src/components/Contact.jsx) posts JSON to
   `POST /api/contact-requests` (`name`, `company`, `email`, `phone`, `topic`, `message`).
   The full URL comes from `VITE_CONTACT_ENDPOINT` in [.env](.env), currently the hosted
   backend at `https://food-delivery-backend-w9s9.onrender.com/api/contact-requests`.
   That is cross-origin, and the API already returns `Access-Control-Allow-Origin: *`.
   A non-2xx response shows an error; a `message` or `error` field in the JSON body is
   displayed to the visitor.

   To post to a backend on your own machine instead, put a relative path in `.env.local`
   (`VITE_CONTACT_ENDPOINT=/api/contact-requests`) — [vite.config.js](vite.config.js)
   proxies `/api` to `http://192.168.0.152:5000` during `npm run dev` and `npm run
   preview`. The proxy only ever applies to relative paths; an absolute URL bypasses it.

   Env vars are read at **build** time, not run time: Vite inlines the value into the
   bundle, so changing `.env` needs a restart in dev and a rebuild for production. Only
   `VITE_`-prefixed names are exposed, and they are public — never put a secret in one.
   Override locally with `.env.local` (git-ignored).

   For a static deploy (Render, Netlify, …) the Vite proxy does not apply. Either keep the
   path relative and add a host rewrite from `/api/*` to the API, or set
   `VITE_CONTACT_ENDPOINT` to an absolute URL and enable CORS on the backend.
3. **Check the stats.** The three figures in the hero (`heroStats`) are illustrative —
   replace them with numbers you can stand behind.
4. **Add real imagery** if you want photography instead of the CSS mockups (hero card,
   phone screen). Both are markup, so they can be swapped without touching layout.

5. **Confirm the Ni's Kitchen logo** in [src/components/PhoneMockup.jsx](src/components/PhoneMockup.jsx)
   may be shown publicly. It is cropped from an app screenshot and is a third party's
   brand mark, so it implies a partnership to anyone who reads the page.

## Pages

The site is a Vite multi-page build, not a single-page app with a router: each entry in
`build.rollupOptions.input` ([vite.config.js](vite.config.js)) becomes its own HTML file,
so `/legal/privacy-policy` is a real URL on any static host with no rewrite rule. React is
split into a chunk both pages share. To add a page, create `<path>/index.html`, a matching
entry under `src/`, and register it in the config.

`Header` and `Footer` take a `base` prop. The home page leaves it empty so its anchors stay
`#contact`; sub-pages pass `base="/"` so the same links become `/#contact` and jump back to
the home page.

The privacy policy still carries unfilled values, shown on the page as dashed
`legal__todo` markers. Search the rendered page for them before the URL goes public.

## Design tokens

Brand colours, typography, radii and shadows are declared once at the top of
[src/styles.css](src/styles.css) under `:root`. Changing `--brand-600` and `--accent-500`
re-themes the whole page.

The palette is sampled from the company logo: `#0068e8` bright blue, `#002870` deep blue
and `#182838` charcoal navy, with cool greys underneath. The one deliberate exception is
[PhoneMockup.jsx](src/components/PhoneMockup.jsx), which keeps the Mbolo Eats app's own
orange (`#ec6636`) because it replicates that product's real interface, and the green and
red used for form success and error states.
