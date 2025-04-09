
import Resident from './resident.js';

export default class Apartment {
  constructor(apartmentNumber) {
    if (apartmentNumber <= 0) {
      throw new Error("Apartment number must be positive");
    }
    this.apartmentNumber = apartmentNumber;
    this.residents = new Set();
  }

  addResident(resident) {
    if (resident instanceof Resident) {
      this.residents.add(resident);
    } else {
      throw new Error("Only instances of Resident can be added");
    }
  }

  getResidents() {
    return Array.from(this.residents).map(resident => resident.name);
  }
}