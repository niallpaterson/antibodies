const gameBoard = {
  svgFrame: null,
  gameBoard: null,
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
};

export default gameBoard;