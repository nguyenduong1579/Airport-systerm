const Passenger = require("./Passenger");

describe("Passengers test",() => {
    it("should throw an error if passenger does not have a name",()=> {
        expect(()=> new Passenger()).toThrowError("passenger must have a name");
    })
    it("should throw an error if passenger does not have a passportNumber",()=> {
        expect(()=> new Passenger("Duong")).toThrowError("passenger must have a passportNumber");
    })
    it("should throw an error if passenger does not have a seatNumber",()=> {
        expect(()=> new Passenger("Duong","223")).toThrowError("passneger must have a seatNumber")
    })
})

