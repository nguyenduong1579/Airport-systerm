
const plane = require("./plane")

describe("plane test",()=> {
    it("throw an error if plane does not have a name",() => {
        expect(() => new plane()).toThrowError("plane must have a name");
    })
})