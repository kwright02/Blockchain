const { time } = require('console');
const Block = require('./block');

class Blockchain {
    
    constructor(){
        this.chain = [new Block(0, new Date().toUTCString(), "Genesis", '0')];
    }

    getPreviousHash(){
        return this.chain[this.chain.length-1].hash;
    }

    addBlock(data){
        const timestamp = new Date().toUTCString();
        const index = this.chain.length;
        const previousHash = this.getPreviousHash();
        const newBlock = new Block(index, time, data, previousHash);
        if(this.isValid(newBlock)){
            this.chain.push(newBlock);
            console.log('Block Added');
        } else {
            console.log('Invalid Block');
        }
    }

    isValid(newBlock){
        const currentBlock = this.chain[this.chain.length-1];
        return currentBlock.index + 1 !== newBlock.index ? false : 
            newBlock.previousHash !== currentBlock.hash ? false : 
            newBlock.hash != newBlock.calculateHash() ? false : true;
    }

    printChain(){
        console.log(this.chain);
    }

}

module.exports = Blockchain;