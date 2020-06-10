import Person from './Person.js';

class Npc extends Person {
  constructor(name, xCoord, yCoord, color) {
    super(name, xCoord, yCoord, color);
    this.color = '#86026F';
  }

  moveInRandomDirection() {
    const randomNumber = Math.random();
    if (randomNumber < 0.25) {
      this.moveToken('up');
    } else if (randomNumber <= 0.5) {
      this.moveToken('right');
    } else if (randomNumber <= 0.75) {
      this.moveToken('left');
    } else {
      this.moveToken('down');
    }
    return this;
  }
}

export default Npc;
