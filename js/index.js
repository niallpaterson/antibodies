import gameBoard from '../js/components/game-board.js';

window.onload = () => {
  gameBoard
    .drawFrame()
    .drawBoard()
    .drawHome()
    .drawSupermarket();
};
