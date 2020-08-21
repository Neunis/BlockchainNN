class Block{
    //constructor recieves property of this box
    /*
     index = optional and tells us where block sits on the chain
     timestamp = when the block was created
     data = the data stored with the blok Ex - transfer (sender and receiver)
     previousHash = what the hash was previously (vip, ensure integrety of has)
    */
    constructor(index, timestamp, data, previousHash = ''){
        //initiates parameter by calling on it
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        //this property contains hash of our block
        //will later need a way to calculate it
        this.hash = ' ';
    }

    calculateHash(){
        //this fxn calcs hash fxn of the block
        /*Ideally talk cal of block, run through hash to help ID, block */
    }

}

