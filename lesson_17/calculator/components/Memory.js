class Memory {
  constructor() {
    this.memoryValue = 0;
  }

  saveToMemory(value) {
    this.memoryValue = value;
  }

  recallMemory() {
    return this.memoryValue;
  }

  clearMemory() {
    this.memoryValue = 0;
  }
}

export default Memory;