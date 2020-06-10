import Person from './Person.js';
import tokens from './tokens.js';
import resetGame from './reset-game.js';
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
      this.token.animate(100, 0, 'now').attr({ fill: '#5BFFFF' });
    }
    return this;
  }

  checkNPCDistance() {
    if (tokens.npcs.some((npc) => {
      return (npc.currentX <= this.currentX + 15) && (npc.currentX >= this.currentX - 15)
      && (npc.currentY <= this.currentY + 15) && (npc.currentY >= this.currentY - 15);
    })) {
      
      this.hasShopping = false;
      scoreCounter.reset();
      resetGame();
    }
    return this;
  }
}

export default Player;
