# Dandelion ++

Source: https://dl.acm.org/doi/pdf/10.1145/3292040.3219620

This is an implementation of the Dandelion++ algorithm tailored for the Ethereum beacon chain but can be used in other scenarios.

Dandelion is a method of passing messages around to a subset of peers before propagating the message in a standard floodsub/gossipsub fashion, to obfuscate the originating sender.

## BN integration thoughts

Dandelion++ should (currently is) be a completely backwards compatible modification of gossipsub. It also should be opt in, not the default or opt out, due to latency and potential for messages to not propogate in time, leading to attestation/block production penalties for being late. However, the users should be able to assess their own threats and opt into having more privacy while potentially taking the hit with timeliness (aka financially with rewards). Until there is more data on how well dandelion++ works in regards to delays in message propogation, I believe it should be opt in. 

## Todo

### Stem Peer Selection

* [ ] Fix protobuf extension
* [ ] Select and maintain the same random stem peers for a long period instead of choosing random stem peers for every message.
* [ ] For received stem messages, remove the sender from the list of peers that are randomly selected from to forward the message to.

### Peer Scoring

* [ ] Peer scoring mechanisms bounding latency need to be implemented so dandelion doesn't cause large delays in message propagation throughout the network.
* [ ] Other peer scoring mechanisms need to be evaluated and tailored for practical dandelion use

## Concerns

* Dandelion, as it is written now, overwrites the sender's peerID with their own every stem hop to help obfuscate the originating sender, but this may cause issues with how well peer scoring works to prevent spam / DOS / malicious attacks.
