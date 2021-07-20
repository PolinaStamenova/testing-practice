const stringLength = require("./stringLength");

it("returns string characters count", () => {
  expect(stringLength("Polina")).toBe(true);
});

it("returns string characters count", () => {
  expect(stringLength("")).toBe(false);
});

it("returns string characters count", () => {
  expect(stringLength("It is a nice day")).toBe(false);
});
