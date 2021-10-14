class Bag {
    constructor(weight){
        this.weight = weight
        if(weight == undefined){
            throw new Error("bag must have a weight")
        }
        else{
            this.weight = weight;
        }
    }
}
const bag = new Bag(16)
module.exports = Bag