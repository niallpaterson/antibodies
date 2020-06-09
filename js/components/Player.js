import Person from './Person.js';
import tokens from './tokens.js';

class Player extends Person {
  constructor(name, xCoord, yCoord, color, hasShopping) {
    super(name, xCoord, yCoord, color, hasShopping);
    this.color = '#5BFFFF';
    this.hasShopping = false;
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

  checkShopDistance() {
    if (this.currentX >= 250 && this.currentY <= 50) { this.pickUpShopping(); }
    return this;
  }

  pickUpShopping() {
    this.hasShopping = true;
    this.token.animate(100, 0, 'now').attr({ fill: '#80FF00' });
    return this;
  }

  checkHomeDistance() {
    if (this.currentY >= 250
      && this.currentX <= 50
      && this.hasShopping === true) { alert('winner!'); }
    return this;
  }

  checkNPCDistance() {
    if (tokens.npcs.some((npc) => {
      console.log(npc.currentX, this.currentX)
      return (npc.currentX <= this.currentX + 15) && (npc.currentX >= this.currentX - 15) 
      && (npc.currentY <= this.currentY + 15) && (npc.currentY >= this.currentY - 15);
    })) {
      alert('Loser!');
    }
    return this;
  }
}

export default Player;
