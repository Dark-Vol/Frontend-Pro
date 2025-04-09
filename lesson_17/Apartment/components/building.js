import Apartment from './apartment.js';

export default class Building {
  constructor(address) {
    if (!address) {
      throw new Error("Address cannot be empty");
    }
    this.address = address;
    this.apartments = new Map();
  }

  addApartment(apartment) {
    if (this.apartments.has(apartment.apartmentNumber)) {
      throw new Error(`Apartment ${apartment.apartmentNumber} already exists`);
    }
    this.apartments.set(apartment.apartmentNumber, apartment);
  }

  getBuildingInfo() {
    const apartmentDetails = [];
    this.apartments.forEach((apartment, number) => {
      apartmentDetails.push({
        apartmentNumber: number,
        residents: apartment.getResidents(),
      });
    });
    return {
      address: this.address,
      apartments: apartmentDetails,
    };
  }
}