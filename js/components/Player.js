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
        this.token.animate(100, 10, 'now').dy(-30);
        break;
      case 'left':
        this.token.animate(100, 10, 'now').dx(-30);
        break;
      case 'down':
        this.token.animate(100, 10, 'now').dy(30);
        break;
      case 'right':
        this.token.animate(100, 10, 'now').dx(30);
        break;
      // no default
    }
    this.checkShopDistance();
    if (this.hasShopping === true) { this.checkHomeDistance(); }
  }

  checkShopDistance() {
    if (this.currentX >= 250 && this.currentY <= 50) { this.pickUpShopping(); }
  }

  pickUpShopping() {
    this.hasShopping = true;
    this.token.attr({ fill: '#80FF00' });
  }

  checkHomeDistance() {
    if (this.currentY >= 250 && this.currentX <= 50) { alert('winner!'); }
  }
}

export default Player;
