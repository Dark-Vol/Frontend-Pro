class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  divide(a, b) {
    if (b === 0) {
      console.error("Cannot divide by zero");
      return NaN;
    }
    this.result = a / b;
    return this.result;
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
  }
}

export default Calculator;