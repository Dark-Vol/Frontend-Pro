class Coach {
  constructor(name, specialization, rating) {
    this.name = name;
    this.specialization = specialization;
    this.rating = rating;
  }

  displayInfo() {
    return `Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`;
  }
}

export default Coach;