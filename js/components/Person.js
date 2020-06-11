import gameBoard from './game-board.js';

class Person {
  constructor(name, xCoord, yCoord, isInfected) {
    this.name = name;
    this.token = null;
    this.moveRight = false;
    this.moveLeft = false;
    this.moveUp = false;
    this.moveDown = false;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.initialXCoord = xCoord;
    this.initialYCoord = yCoord;
    this.isInfected = isInfected || false;
    this.initialInfection = isInfected || false;
  }

  drawToken() {
    this.token = gameBoard.svgFrame
      .circle(15)
      .center(this.initialXCoord, this.initialYCoord)
      .attr({
        fill: this.color,
      });
    return this;
  }

  get currentX() {
    return this.xCoord;
  }

  get currentY() {
    return this.yCoord;
  }

  moveToken(direction) {
    switch (direction) {
      case 'up':
        this.token.animate(15, 0, 'now').ease('-').dy(-1.5);
        this.yCoord -= 1.5;
        break;
      case 'left':
        this.token.animate(15, 0, 'now').ease('-').dx(-1.5);
        this.xCoord -= 1.5;
        break;
      case 'down':
        this.token.animate(15, 0, 'now').ease('-').dy(1.5);
        this.yCoord += 1.5;
        break;
      case 'right':
        this.token.animate(15, 0, 'now').ease('-').dx(1.5);
        this.xCoord += 1.5;
        break;
      // no default
    }
    return this;
  }

  isBySouthWall() {
    return this.currentY >= 292.5;
  }

  isByNorthWall() {
    return this.currentY <= 7.5;
  }

  isByEastWall() {
    return this.currentX >= 292.5;
  }

  isByWestWall() {
    return this.currentX <= 7.5;
  }

  isBySupermarketWall() {
    return this.currentX >= 235 && this.currentY <= 65;
  }

  isByHomeWall() {
    return this.currentX <= 65 && this.currentY >= 235;
  }

  resetCoordinates() {
    this.xCoord = this.initialXCoord;
    this.yCoord = this.initialYCoord;
    return this;
  }

  resetInfection() {
    if (this.initialInfection) {
      this.isInfected = true;
    } else {
      this.isInfected = false;
    }
    return this;
  }
}

export default Person;
