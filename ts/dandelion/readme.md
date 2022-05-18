# Dandelion ++

Source: https://dl.acm.org/doi/pdf/10.1145/3292040.3219620

This is an implementation of the Dandelion++ algorithm tailored for the Ethereum beacon chain but can be used in other scenarios.

## Todo

### Stem Peer selection

* [ ] Select and maintain the same random stem peers for a long period instead of choosing random stem peers for every message.
* [ ] For received stem messages, remove the sender from the list of peers that are randomly selected from to forward the message to.
