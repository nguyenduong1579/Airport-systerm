const Bag = require("./Bag");

describe("Unit test for bag class", () =>{
    it("should throw an error if bag does not have weight", () => {
        expect(() => new Bag()).toThrowError("bag must have a weight");
    })
})