/** Generates a random int between stemMin and stemMax, with fallbacks:
 * * returns zero if dandelion isn't enable
 * * If stemMin is undefined or invalid it is set to 1
 * * if stemMax is undefined or invalid it is set to stemMin + 2
 */
function generateStemLength(stemMin: number | undefined, stemMax: number | undefined): number {
  if (stemMin === undefined || stemMin < 1) {
    stemMin = 2
  }
  if (stemMax === undefined || stemMax <= stemMin) {
    stemMax = Math.min(stemMin * 2, stemMin + 2)
  }

  // Random number between stemMin and stemMax
  return Math.floor(Math.random() * (stemMax - stemMin + 1) + stemMin)
}

export { generateStemLength }
