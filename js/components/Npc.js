import Person from './Person.js';

class Npc extends Person {
  constructor(name, xCoord, yCoord, color) {
    super(name, xCoord, yCoord, color);
    this.color = '#86026F';
  }

  selectRandomDirection() {
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

  moveToken(direction) {
    switch (direction) {
      case 'up':
        this.token.animate(250, 0, 'now').ease('-').dy(-15);
        break;
      case 'left':
        this.token.animate(250, 0, 'now').ease('-').dx(-15);
        break;
      case 'down':
        this.token.animate(250, 0, 'now').ease('-').dy(15);
        break;
      case 'right':
        this.token.animate(250, 0, 'now').ease('-').dx(15);
        break;
      // no default
    }
    return this;
  }
}

export default Npc;
