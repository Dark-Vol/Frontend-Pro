class History {
  constructor() {
    this.history = [];
  }

  addToHistory(calculation) {
    this.history.push(calculation);
  }

  displayHistory() {
    console.log("Calculation History:");
    this.history.forEach((entry, index) => {
      console.log(`${index + 1}: ${entry}`);
    });
  }
}

export default History;