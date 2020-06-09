import Person from './Person.js';

class Player extends Person {
  constructor(name, xCoord, yCoord, color, hasShopping) {
    super(name, xCoord, yCoord, color, hasShopping);
    this.color = '#5BFFFF';
    this.hasShopping = false;
  }

  get currentX() {
    return this.token.cx();
  }

  get currentY() {
    return this.token.cy();
  }

  moveToken(direction) {
    switch (direction) {
      case 'up':
        this.token.animate(100, 10, 'now').dy(-15);
        break;
      case 'left':
        this.token.animate(100, 10, 'now').dx(-15);
        break;
      case 'down':
        this.token.animate(100, 10, 'now').dy(15);
        break;
      case 'right':
        this.token.animate(100, 10, 'now').dx(15);
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
}

export default Player;
