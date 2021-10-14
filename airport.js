class airport{
    constructor(name){
        this.name = name
        if(name == undefined){
            throw new Error("airport must have a name")
        }
        else{
            this.name = name
        }
    }
}
module.exports = airport