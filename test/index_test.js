const assert = require("assert");
const Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".sum", () => {
    it("returns the sum of an array of numbers", () => {
      //setup
      const actual = Calculate.sum([1, 2, 3]);
      //exercise
      const expected = 6;

      //verify
      assert.strictEqual(actual, expected);
    });
  });
});
