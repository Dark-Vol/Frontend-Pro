import Coach from './Coach.js';

class Team {
  constructor() {
    this.coaches = [];
  }

  addCoach(coach) {
    if (coach instanceof Coach) {
      this.coaches.push(coach);
    } else {
      console.error('Invalid coach');
    }
  }

  getCoaches() {
    return this.coaches;
  }
}

export default Team;