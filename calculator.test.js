const Calculator = require("./calculator");
let calc = new Calculator();

describe("calculate", () => {
  test("add", () => {
    expect(calc.add(2, 5)).toBe(7);
  });

  test("add", () => {
    expect(calc.add(12, 5)).toBe(17);
  });

  test("add", () => {
    expect(calc.add(10, 5)).toBe(15);
  });

  test("subtract", () => {
    expect(calc.subtract(9, 5)).toBe(4);
  });

  test("subtract", () => {
    expect(calc.subtract(20, 5)).toBe(15);
  });

  test("subtract", () => {
    expect(calc.subtract(10, 5)).toBe(5);
  });

  test("devide", () => {
    expect(calc.devide(16, 4)).toBe(4);
  });

  test("devide", () => {
    expect(calc.devide(36, 6)).toBe(6);
  });

  test("devide", () => {
    expect(calc.devide(20, 2)).toBe(10);
  });

  test("multiply", () => {
    expect(calc.multiply(20, 2)).toBe(40);
  });

  test("multiply", () => {
    expect(calc.multiply(5, 6)).toBe(30);
  });

  test("multiply", () => {
    expect(calc.multiply(6, 6)).toBe(36);
  });
});
