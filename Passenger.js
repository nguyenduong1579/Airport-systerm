class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
        //name test
        if(name == undefined){
            throw new Error("passenger must have a name")
        }
        else{
            this.name = name;
        }

        //passportNumber test
        if(passportNumber == undefined){
            throw new Error("passenger must have a passportNumber")
        }
        else{
            this.passportNumber = passportNumber;
        }
        //seatNumber test
        if(seatNumber == undefined){
            throw new Error("passneger must have a seatNumber")
        }
        else{
            this.seatNumber = seatNumber;
        }
    }
    addbag(bag) {
        this.bags.push(bag)
    }
}
module.exports = Passenger