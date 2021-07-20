const reverseString = require("./reverseString");

it("returns reverse string", () => {
  expect(reverseString("polina")).toBe("anilop");
});

it("returns reverse string", () => {
  expect(reverseString("i love cats")).toBe("stac evol i");
});
