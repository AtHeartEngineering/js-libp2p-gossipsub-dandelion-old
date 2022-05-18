# Dandelion ++

Source: https://dl.acm.org/doi/pdf/10.1145/3292040.3219620

This is an implementation of the Dandelion++ algorithm tailored for the Ethereum beacon chain but can be used in other scenarios.

Dandelion is method of passing messages around to a subset of peers before propagating the message in a standard floodsub/gossipsub fashion, in order to obfuscate the originating sender.

## Todo

### Stem Peer Selection

* [ ] Select and maintain the same random stem peers for a long period instead of choosing random stem peers for every message.
* [ ] For received stem messages, remove the sender from the list of peers that are randomly selected from to forward the message to.

### Peer Scoring

* [ ] Peer scoring mechanisms bounding latency need to be implemented so dandelion doesn't cause large delays in message propagation throughout the network.
* [ ] Other peer scoring mechanisms need to be evaluated and tailored for practical dandelion use

## Concerns

* Dandelion, as it is written now, overwrites the sender's peerID with their own every stem hop to help obfuscate the originating sender, but this will likely cause issues with how well peer scoring works to prevent spam / DOS / malicious attacks.
