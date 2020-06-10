import addEventListeners from './key-events.js';
import gameBoard from './game-board.js';
import tokens from './tokens.js';

const startGame = () => {
  gameBoard
    .drawFrame()
    .drawBoard()
    .drawHome()
    .drawSupermarket();

  tokens.npcs.forEach((token) => {
    token.drawToken();
    setInterval(() => { token.moveInRandomDirection(); }, 100);
  });

  tokens.player.drawToken();

  addEventListeners
    .forTokenMovement()
    .forCheckingTokenDistances();
};

export default startGame;
