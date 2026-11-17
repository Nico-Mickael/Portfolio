import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { copyFile, mkdir, rm, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { chromium } from 'playwright-core'

// Regenerates public/cv-nico-mickael.pdf from the /cv page using a headless
// Chromium browser (Edge, Chrome or Chromium) and vite preview.
const PORT = 4173
const URL = `http://localhost:${PORT}/cv`
const OUTPUT = join('public', 'cv-nico-mickael.pdf')
const PROFILE_DIR = join(tmpdir(), 'portfolio-cv-pdf-profile')

const BROWSERS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
]

function findBrowser() {
  const browser = BROWSERS.find((path) => existsSync(path))
  if (!browser) {
    throw new Error('Aucun navigateur Chromium trouvé (Edge, Chrome ou Chromium).')
  }
  return browser
}

async function waitForServer(url, timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      // server not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 300))
  }
  throw new Error(`Le serveur de prévisualisation n'a pas démarré sur ${url}`)
}

const preview = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--port', String(PORT), '--strictPort'], {
  stdio: 'ignore',
})

try {
  await waitForServer(`http://localhost:${PORT}/`)
  await rm(PROFILE_DIR, { recursive: true, force: true })
  await mkdir('public', { recursive: true })

  const outputPath = resolve(OUTPUT)
  const previousMtime = existsSync(outputPath) ? (await stat(outputPath)).mtimeMs : 0

  const browser = await chromium.launch({ executablePath: findBrowser(), headless: true })

  try {
    const page = await browser.newPage({ colorScheme: 'light' })
    await page.goto(URL, { waitUntil: 'networkidle' })
    await page.emulateMedia({ media: 'print', colorScheme: 'light' })
    await page.waitForFunction(() => {
      const image = document.querySelector('article img')
      return image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0
    })
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    })
  } finally {
    await browser.close()
  }

  const generated = existsSync(outputPath) ? (await stat(outputPath)).mtimeMs : 0
  if (generated <= previousMtime) {
    throw new Error(`La génération du PDF a échoué (${OUTPUT} non mis à jour).`)
  }

  console.log(`PDF généré : ${OUTPUT}`)

  if (existsSync('dist')) {
    await copyFile(outputPath, resolve('dist', 'cv-nico-mickael.pdf'))
  }
} finally {
  preview.kill()
  await rm(PROFILE_DIR, { recursive: true, force: true })
}
