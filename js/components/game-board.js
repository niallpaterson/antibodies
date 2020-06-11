const gameBoard = {
  svgFrame: null,
  gameBoard: null,
  home: null,
  supermarket: null,
  menu: null,
  text: null,
  drawFrame() {
    this.svgFrame = SVG().addTo('.gameboard').size(300, 300);
    return this;
  },
  drawBoard() {
    this.board = this.svgFrame
      .rect(300, 300)
      .attr({
        fill: '#000000',
        rx: 5,
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
  drawMenu() {
    this.menu = this.svgFrame
      .rect(300, 300)
      .attr({
        fill: '#D0A706',
        rx: 5,
      });
    return this;
  },
  drawStartText() {
    this.text = this.svgFrame
      .text('The infection is here. \n\n\n Stockpile to survive. \n\n\n Press start to begin.')
      .center(150, 150);
    return this;
  },
  hideMenu() {
    this.text
      .text('');
    this.menu
      .animate(1000, 0, 'now').opacity(0);
    return this;
  },
  showMenu() {
    this.menu
      .animate(1000, 0, 'now').opacity(1);
    return this;
  },
};

export default gameBoard;
