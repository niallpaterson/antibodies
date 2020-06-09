import gameBoard from './game-board.js';

class Person {
  constructor(name, xCoord, yCoord) {
    this.name = name;
    this.token = null;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  drawToken() {
    this.token = gameBoard.svgFrame
      .circle(15)
      .center(this.xCoord, this.yCoord)
      .attr({
        fill: '#86026F',
      });
    return this;
  }
}

export default Person;
