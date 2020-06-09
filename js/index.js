import addEventListeners from '../js/components/key-events.js';
import gameBoard from '../js/components/game-board.js';
import tokens from '../js/components/tokens.js'

window.onload = () => {
  gameBoard
    .drawFrame()
    .drawBoard()
    .drawHome()
    .drawSupermarket();

  tokens.npcs.forEach((token) => {
    token.drawToken();
  });

  tokens.player.drawToken();

  addEventListeners
    .forTokenMovement();

};
