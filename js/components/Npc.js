import Person from './Person.js';

class Npc extends Person {
  constructor(name, xCoord, yCoord, color) {
    super(name, xCoord, yCoord, color);
    this.color = '#86026F';
    this.isOnBoard = false;
  }

  isBySupermarketWall() {
    return this.currentX >= 235 && this.currentY <= 65;
  }

  isByHomeWall() {
    return this.currentX <= 65 && this.currentY >= 235;
  }
}

export default Npc;
