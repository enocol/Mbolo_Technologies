import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Contact form posts to /api/contact-requests; forward /api to the API box on the LAN
// so the browser stays same-origin and the backend needs no CORS headers.
const proxy = {
  '/api': {
    target: 'http://192.168.0.152:5000',
    changeOrigin: true
  }
}

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true, proxy },
  preview: { proxy }
})
