
const aiport = require("./airport")

describe("airport test",() =>{
    it("should throw an error if airport does not have a name ",()=>{
        expect(()=> new aiport()).toThrowError("airport must have a name")
    })
})