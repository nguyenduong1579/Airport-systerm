class plane{
    constructor(name){
        this.name = name
        if(name == undefined){
            throw new Error("plane must have a name")
        }
        else{
            this.name = name
        }
    }
}
module.exports = plane