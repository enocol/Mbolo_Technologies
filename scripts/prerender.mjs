// Writes the pages listed in src/entry-server.jsx into their built shells as
// static HTML, so the markup is in the document body rather than appearing only
// once JavaScript has run.
//
// Google's privacy-policy requirements ask for the policy to be in the body of
// the page; an automated fetch that does not execute scripts would otherwise
// find an empty root element.
//
// Runs after both builds. The client entry hydrates this markup rather than
// rendering from scratch — see src/legal.jsx.
import { readFile, writeFile } from 'node:fs/promises'
import { pageKeys, renderPage } from '../dist-ssr/entry-server.js'

const PLACEHOLDER = '<div id="root"></div>'
let failures = 0

for (const key of pageKeys) {
  const file = new URL(`../dist/${key}`, import.meta.url)
  const shell = await readFile(file, 'utf8')

  if (!shell.includes(PLACEHOLDER)) {
    console.error(`prerender: ${key} has no ${PLACEHOLDER} to fill`)
    failures++
    continue
  }

  const html = renderPage(key)

  // A dev-server path here means the render did not go through the SSR build,
  // and the page would ship with assets that 404 for anyone without JS.
  const stray = html.match(/(?:src|href)="\/(?:src|@)[^"]*"/g)
  if (stray) {
    console.error(`prerender: ${key} references unbuilt assets: ${[...new Set(stray)].join(', ')}`)
    failures++
    continue
  }

  await writeFile(file, shell.replace(PLACEHOLDER, `<div id="root">${html}</div>`))
  console.log(`prerender: ${key} (${(html.length / 1024).toFixed(1)} KB of markup)`)
}

// A silently unprerendered page defeats the point, so fail the build.
if (failures) process.exit(1)
