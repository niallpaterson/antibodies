import gameBoard from './game-board.js';

class Person {
  constructor(name, xCoord, yCoord, color) {
    this.name = name;
    this.token = null;
    this.color = '#86026F';
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  drawToken() {
    this.token = gameBoard.svgFrame
      .circle(15)
      .center(this.xCoord, this.yCoord)
      .attr({
        fill: this.color,
      });
    return this;
  }
}

export default Person;
