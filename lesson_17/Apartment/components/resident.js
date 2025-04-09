export default class Resident {
  constructor(name, age) {
    if (!name || age <= 0) {
      throw new Error("Invalid input for Resident");
    }
    this.name = name;
    this.age = age;
  }
}