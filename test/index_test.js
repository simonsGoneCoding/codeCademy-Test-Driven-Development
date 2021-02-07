const assert = require("assert");
const Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      //setup
      const expected = 6;
      //exercise
      const inputArray = [1, 2, 3];
      const actual = Calculate.sum(inputArray);
      //verify
      assert.equal(actual, expected);
    });

    it("returns the sum of a four-item list", () => {
      //setup
      const expected = 10;
      //exercise
      const inputArray = [1, 2, 3, 4];
      const actual = Calculate.sum(inputArray);
      //verify
      assert.equal(actual, expected);
    });
  });
});
