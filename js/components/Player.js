import Person from './Person.js';
import tokens from './tokens.js';
import scoreCounter from './score-counter.js';

class Player extends Person {
  constructor(name, xCoord, yCoord, color, hasShopping) {
    super(name, xCoord, yCoord, color, hasShopping);
    this.color = '#5BFFFF';
    this.hasShopping = false;
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
      && this.hasShopping === true) {
      this.hasShopping = false;
      scoreCounter.increment();
      tokens.makeNpc();
      this.token.animate(100, 0, 'now').attr({ fill: '#5BFFFF' });
    }
    return this;
  }
}

export default Player;
