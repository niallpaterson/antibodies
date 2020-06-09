import Person from './Person.js';

class Npc extends Person {
  constructor(name, xCoord, yCoord, color) {
    super(name, xCoord, yCoord, color);
    this.color = '#86026F';
  }
}

export default Player;
