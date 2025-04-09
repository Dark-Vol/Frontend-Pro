// /main.js

import { Building, Apartment, Resident } from './components/index.js';

function createBuilding(address, numberOfApartments, residentsPerApartment) {
  const building = new Building(address);

  for (let i = 1; i <= numberOfApartments; i++) {
    const apartment = new Apartment(i);

    for (let j = 1; j <= residentsPerApartment; j++) {
      const residentName = prompt(`Enter name for resident ${j} in apartment ${i}:`);
      const residentAge = parseInt(prompt(`Enter age for resident ${j} in apartment ${i}:`));

      if (!residentName || isNaN(residentAge) || residentAge <= 0) {
        console.error("Invalid resident data, skipping...");
        continue;
      }

      const resident = new Resident(residentName, residentAge);
      apartment.addResident(resident);
    }

    building.addApartment(apartment);
  }

  return building;
}

const building = createBuilding("123 Main St", 3, 2);
console.log("Building Info:", building.getBuildingInfo());
