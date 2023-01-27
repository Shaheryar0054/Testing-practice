const Calculator = require('./calculator')

//Test

describe("Calculator add method", () => {
  test("adds 5 to current value", () => {
      const calculator = new Calculator();
      calculator.add(5);
      expect(calculator.currentValue).toBe(5);
  });
  test("adds -3 to current value", () => {
      const calculator = new Calculator();
      calculator.add(-3);
      expect(calculator.currentValue).toBe(-3);
  });
  test("adds 0 to current value", () => {
      const calculator = new Calculator();
      calculator.add(0);
      expect(calculator.currentValue).toBe(0);
  });
});

describe("Calculator subtract method", () => {
  test("subtracts 5 from current value", () => {
      const calculator = new Calculator();
      calculator.subtract(5);
      expect(calculator.currentValue).toBe(-5);
  });
  test("subtracts -3 from current value", () => {
      const calculator = new Calculator();
      calculator.subtract(-3);
      expect(calculator.currentValue).toBe(3);
  });
  test("subtracts 0 from current value", () => {
      const calculator = new Calculator();
      calculator.subtract(0);
      expect(calculator.currentValue).toBe(0);
  });
});

describe("Calculator multiply method", () => {
  test("multiplies current value by 5", () => {
      const calculator = new Calculator();
      calculator.multiply(5);
      expect(calculator.currentValue).toBe(0);
  });
  test("multiplies current value by -3", () => {
      const calculator = new Calculator();
      calculator.multiply(-3);
      expect(calculator.currentValue).toBeCloseTo(0);
  });
  test("multiplies current value by 0", () => {
      const calculator = new Calculator();
      calculator.multiply(0);
      expect(calculator.currentValue).toBe(0);
  });
});

describe("Calculator divide method", () => {
  test("divides current value by 5", () => {
      const calculator = new Calculator();
      calculator.currentValue = 15
      calculator.divide(5);
      expect(calculator.currentValue).toBe(3);
  });
  test("divides current value by -3", () => {
      const calculator = new Calculator();
      calculator.currentValue = -9
      calculator.divide(-3);
      expect(calculator.currentValue).toBe(3);
  });
});