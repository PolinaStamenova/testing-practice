const capitalize = require("./capitalizeString");

describe("capitalize", () => {
  test("capitalize", () => {
    expect(capitalize("polina")).toBe("Polina");
  });
});
