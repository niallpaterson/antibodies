const gameBoard = {
  svgFrame: null,
  gameBoard: null,
  home: null,
  supermarket: null,
  drawFrame() {
    this.svgFrame = SVG().addTo('main').size(300, 300);
    console.log('made it');
    return this;
  },
  drawBoard() {
    this.board = this.svgFrame
      .rect(300, 300)
      .attr({
        fill: '#1f1f1f',
        rx: 15,
      });
    return this;
  },
  drawHome() {
    this.home = this.svgFrame
      .rect(50, 50)
      .center(25, 275)
      .attr({
        fill: '#2E3850',
        rx: 5,
      });
    return this;
  },
  drawSupermarket() {
    this.supermarket = this.svgFrame
      .rect(50, 50)
      .center(275, 25)
      .attr({
        fill: '#473646',
        rx: 5,
      });
    return this;
  },
};

export default gameBoard;
