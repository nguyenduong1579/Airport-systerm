const crewMember = require("./crewMember")

describe("crew member test",() => {
    it("should throw an error if crewMember does not have a name",()=> {
        expect(()=> new crewMember()).toThrowError("crewmember must have a name");
    })
    it("should throw an error if crewMember does not have a position",() =>{
        expect(()=> new crewMember("duong")).toThrowError("crewMember must have a postion");
    })
    it("should throw an error if crewMember does not have a staffNumber",()=> {
        expect(()=> new crewMember("duong",1234)).toThrowError("crewmember must have a staffNumber");
    })
})