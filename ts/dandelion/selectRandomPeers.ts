/** Selects a random peer from interested in a topic to be the next stem node */
function selectRandomPeers(topicPeers: Set<string> | undefined, num: number | undefined): Set<string> {
  // TODO: evaluate if the new "getGossipPeers" function should be used instead of this. - AHE
  const numPeers = num ?? 1
  let candidates = []
  const selectedPeers = []

  if (topicPeers !== undefined) {
    // console.log(topicPeers.size + " peers in topic '" + topic + "'")
    candidates = Array.from(topicPeers.values())
    for (let i = 0; i < numPeers; i++) {
      const randomPeer = Math.floor(Math.random() * candidates.length)
      if (candidates[randomPeer] !== undefined) {
        selectedPeers.push(candidates[randomPeer])
        candidates.splice(randomPeer, 1)
      }
    }
    return new Set(selectedPeers)
  } else {
    // console.log('Not enough peers for topic: ' + topic) // Todo: remove and replace with error - AHE
    throw new Error('Not enough peers for topic')
  }
}

export { selectRandomPeers }
