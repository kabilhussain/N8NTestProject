/**
 * coffeeImages.js
 *
 * Central image registry for the coffee shop app.
 *
 * Every image that is dropped into one of the app's asset folders is picked up
 * automatically at build time via Vite's `import.meta.glob` (eager + default
 * import), so the returned values are real, bundled image URLs — not runtime
 * string paths. This is what makes the images actually show up in the
 * Products page and on the Home page.
 *
 * Scanned folders (relative to this file, src/data/):
 *   ../assets      -> src/assets
 *   ../asset       -> src/asset
 *   ../images      -> src/images
 *   ../../assets   -> my-react-app/assets
 *
 * Supported extensions: png, jpg, jpeg, webp, svg, avif, gif
 *
 * Exports:
 *   default  coffeeImages          -> string[] of bundled image URLs
 *   named    getCoffeeImage(index) -> stable image for a given index
 *   named    getRandomCoffeeImage()-> random image (optional helper)
 */

const FALLBACK_IMAGE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">' +
      '<rect width="400" height="300" fill="#f4f3ec"/>' +
      '<text x="50%" y="50%" font-family="sans-serif" font-size="26" fill="#6b6375" ' +
      'text-anchor="middle" dominant-baseline="middle">Coffee</text>' +
      '</svg>',
  )

/* ------------------------------------------------------------------ *
 * 1. Import every image in the asset folders directly (eager + URL)  *
 * ------------------------------------------------------------------ */

const assetModules = {
  ...import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg,avif,gif}', {
    eager: true,
    import: 'default',
  }),
  ...import.meta.glob('../asset/**/*.{png,jpg,jpeg,webp,svg,avif,gif}', {
    eager: true,
    import: 'default',
  }),
  ...import.meta.glob('../images/**/*.{png,jpg,jpeg,webp,svg,avif,gif}', {
    eager: true,
    import: 'default',
  }),
  ...import.meta.glob('../../assets/**/*.{png,jpg,jpeg,webp,svg,avif,gif}', {
    eager: true,
    import: 'default',
  }),
}

/* ------------------------------------------------------------------ *
 * 2. Deterministic ordering so every render/build is identical       *
 * ------------------------------------------------------------------ */

const coffeeImages = Object.keys(assetModules)
  .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
  .map((key) => assetModules[key])
  .filter((src) => typeof src === 'string' && src.length > 0)

// Never hand back an empty array — the cards would render broken images.
if (coffeeImages.length === 0) {
  coffeeImages.push(FALLBACK_IMAGE)
}

/* ------------------------------------------------------------------ *
 * 3. Helpers                                                          *
 * ------------------------------------------------------------------ */

/**
 * Returns the image that belongs to a given index.
 * Safe for negative, NaN or out-of-range values (wraps around).
 *
 * @param {number} index
 * @returns {string} bundled image URL
 */
export function getCoffeeImage(index = 0) {
  const total = coffeeImages.length
  if (total === 0) return FALLBACK_IMAGE

  const numeric = Number(index)
  const safeIndex = Number.isFinite(numeric) ? Math.abs(Math.trunc(numeric)) : 0

  return coffeeImages[safeIndex % total]
}

/**
 * Returns a pseudo-random image from the pool.
 * Pass a seed (e.g. a product id) to keep the result stable per item.
 *
 * @param {number|string} [seed]
 * @returns {string} bundled image URL
 */
export function getRandomCoffeeImage(seed) {
  const total = coffeeImages.length
  if (total === 0) return FALLBACK_IMAGE

  if (seed === undefined || seed === null) {
    return coffeeImages[Math.floor(Math.random() * total)]
  }

  const text = String(seed)
  let hash = 0
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) % 1000003
  }

  return coffeeImages[hash % total]
}

export default coffeeImages