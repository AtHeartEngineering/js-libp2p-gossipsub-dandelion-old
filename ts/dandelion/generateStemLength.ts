/** Generates a random int between stemMin and stemMax, with fallbacks:
 * * returns zero if dandelion isn't enable
 * * If stemMin is undefined or invalid it is set to 2
 * * if stemMax is undefined or invalid it is set to the minimum value between stemMin + 3 and 10
 */
function generateStemLength(stemMin: number | undefined, stemMax: number | undefined): number {
  // StemMin should be at minimum 1, but recommend setting it to 2
  if (stemMin === undefined || stemMin < 1) {
    stemMin = 2
  }
  // This is set to a <= and not an < because there should be some randomness in the stem length
  if (stemMax === undefined || stemMax <= stemMin) {
    stemMax = Math.min(stemMin + 3, 10)
  }

  // Returns a random whole number between stemMin and stemMax
  return Math.floor(Math.random() * (stemMax - stemMin + 1) + stemMin)
}

export { generateStemLength }
