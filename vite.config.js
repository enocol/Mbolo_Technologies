import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Contact form posts to /api/contact-requests; forward /api to the API box on the LAN
// so the browser stays same-origin and the backend needs no CORS headers.
// Only applies to relative endpoints — an absolute VITE_CONTACT_ENDPOINT bypasses it.
const proxy = {
  '/api': {
    target: 'http://192.168.0.152:5000',
    changeOrigin: true
  }
}

// Every page in the build. Each becomes its own HTML file, so /legal/privacy-policy
// is a real URL on a static host — no router, no SPA rewrite rule.
const pages = {
  main: 'index.html',
  privacy: 'legal/privacy-policy/index.html',
  terms: 'legal/terms-of-service/index.html'
}

const entry = (path) => fileURLToPath(new URL(path, import.meta.url))

// Resolve "/legal/privacy-policy" to that directory's index.html, the way a static
// host does. Without it the dev server has no route for the extensionless path and
// quietly falls through to the home page instead.
function cleanUrls() {
  const routes = new Map(
    Object.values(pages)
      .filter((file) => file !== 'index.html')
      .map((file) => ['/' + file.replace(/\/index\.html$/, ''), '/' + file])
  )
  const rewrite = (req, _res, next) => {
    const [path, search] = req.url.split('?')
    const target = routes.get(path.replace(/\/+$/, ''))
    if (target) req.url = target + (search ? '?' + search : '')
    next()
  }
  // Block bodies on purpose: `middlewares.use()` returns the connect app, and a
  // value returned from these hooks is treated as a post-hook to invoke.
  return {
    name: 'clean-urls',
    configureServer(server) {
      server.middlewares.use(rewrite)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite)
    }
  }
}

export default defineConfig({
  plugins: [react(), cleanUrls()],
  // 'mpa' turns off the SPA history fallback. A wrong URL then 404s instead of
  // silently rendering the home page, which hides broken links.
  appType: 'mpa',
  server: { port: 5173, open: true, proxy },
  preview: { proxy },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([name, file]) => [name, entry(file)])
      )
    }
  }
})
