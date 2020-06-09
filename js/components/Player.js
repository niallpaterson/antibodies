import Person from './Person.js';

class Player extends Person {
  constructor(name, xCoord, yCoord, color) {
    super(name, xCoord, yCoord, color);
    this.color = '#5BFFFF';
  }
}

export default Player;
