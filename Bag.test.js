const Bag = require("./Bag");

describe("Unit test for bag class", () =>{
    it("should return a number from bag weight", () => {
        expect( typeof new Bag(16).weight).toBe("number");
    })
    it("should throw an error if bag does not have weight", () => {
        expect(() => new Bag()).toThrowError("bag must have a weight");
    })
    it("should return the exact number weight as passed ", () => {
        expect(new Bag(15).weight).toEqual(15);
    })
})