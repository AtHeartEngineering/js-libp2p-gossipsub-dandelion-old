/** This function is used when receiving a message that has a stem length, and is used to reduce the stem length for the next hop.
 *
 * Reduces the stemLength by a random whole number between stemReductionMin and stemReductionMax. The randomness helps obfuscate the sending source and helps propogate the message via floodsub/classic gossipsub to the network sooner.
 */

function reviseStemLength(
  stemLength: number | undefined,
  stemReductionMin: number | undefined,
  stemReductionMax: number | undefined
): number {
  if (stemLength !== undefined) {
    // Highly recommend stemReductionMin be 1, but it could be set to 0
    if (stemReductionMin === undefined || stemReductionMin < 0) {
      stemReductionMin = 1
    }
    // stemReductionMax could be the same value as stemReductionMin if you want a more deterministic, but recommend it be set to stemReductionMin + 1
    if (stemReductionMax === undefined || stemReductionMax < stemReductionMin) {
      stemReductionMax = stemReductionMin + 1
    }
    const delta = Math.floor(Math.random() * (stemReductionMax - stemReductionMin + 1) + stemReductionMin)

    let newStemLength = stemLength - delta
    if (newStemLength < 0) {
      newStemLength = 0
    }
    return newStemLength
  } else {
    return 0
  }
}

export { reviseStemLength }
