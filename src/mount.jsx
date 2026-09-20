import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

/**
 * Attaches a page to #root.
 *
 * The build prerenders both pages into their shells (scripts/prerender.mjs), so
 * in production there is markup to adopt rather than replace — hydrating keeps
 * it, while createRoot would throw it away and render again. The dev server
 * serves the empty shell, hence the check rather than always hydrating.
 */
export function mount(page) {
  const container = document.getElementById('root')
  const tree = <StrictMode>{page}</StrictMode>

  if (container.hasChildNodes()) {
    hydrateRoot(container, tree)
  } else {
    createRoot(container).render(tree)
  }
}
