const Block = require('./block');
const Blockchain = require('./blockchain');

const chain = new Blockchain();

chain.addBlock("Donald J Trump");
chain.addBlock("Joseph R Biden");
chain.printChain();