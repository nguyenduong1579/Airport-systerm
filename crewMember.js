class crewMember {
    constructor(name, position, staffNumber){
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
        if(name == undefined){
            throw new Error("crewmember must have a name")
        }
        else{
            this.name = name
        }
        if(position == undefined){
            throw new Error("crewMember must have a postion")
        }
        else{
            this.position = position
        }
        if(staffNumber == undefined){
            throw new Error("crewmember must have a staffNumber")
        }
        else{
            this.staffNumber = staffNumber
        }
    }
}

module.exports = crewMember