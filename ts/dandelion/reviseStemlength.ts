function reviseStemLength(
  stemLength: number | undefined,
  stemReductionMin: number | undefined,
  stemReductionMax: number | undefined
): number {
  if (stemLength !== undefined) {
    if (stemReductionMin === undefined || stemReductionMin < 1) {
      stemReductionMin = 1
    }
    if (stemReductionMax === undefined || stemReductionMax < stemReductionMin) {
      stemReductionMax = stemReductionMin + 1
    }
    const delta = Math.floor(Math.random() * (stemReductionMax - stemReductionMin + 1) + stemReductionMin)

    // console.log("Min " + stemReductionMin)
    // console.log("Max " + stemReductionMax)
    // console.log("Dlt " + delta)

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
