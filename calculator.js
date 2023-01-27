class Calculator {
    constructor() {
        this.currentValue = 0;
    }
  
    add(value) {
        this.currentValue += value;
    }
  
    subtract(value) {
        this.currentValue -= value;
    }
  
    multiply(value) {
        this.currentValue *= value;
    }
  
    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by 0.");
        }
        this.currentValue /= value;
    }
  }
  module.exports = Calculator;
  