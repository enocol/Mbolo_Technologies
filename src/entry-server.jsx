import { renderToString } from 'react-dom/server'
import App from './App'
import PrivacyPolicy from './components/PrivacyPolicy'

// Pages rendered to static HTML at build time, keyed by their built shell.
// This module is bundled by `vite build --ssr`, so asset imports inside these
// components resolve to their production URLs — rendering through the dev
// server instead would emit /src/... paths that do not exist in dist/.
const pages = {
  'index.html': App,
  'legal/privacy-policy/index.html': PrivacyPolicy
}

export const pageKeys = Object.keys(pages)

export function renderPage(key) {
  const Page = pages[key]
  if (!Page) throw new Error(`prerender: no page registered for ${key}`)
  return renderToString(<Page />)
}
