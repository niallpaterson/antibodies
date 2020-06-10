import Person from './Person.js';

class Npc extends Person {
  constructor(name, xCoord, yCoord, color) {
    super(name, xCoord, yCoord, color);
    this.color = '#86026F';
  }

  randomlySetMoveDirection() {
    setInterval(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.25) {
        this.moveUp = true;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
      } else if (randomNumber <= 0.5) {
        this.moveUp = false;
        this.moveDown = true;
        this.moveLeft = false;
        this.moveRight = false;
      } else if (randomNumber <= 0.75) {
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = true;
        this.moveRight = false;
      } else {
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = true;
      }
    }, 250);
    return this;
  }
}

export default Npc;
