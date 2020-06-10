import startGame from './start-game.js';
import gameBoard from './game-board.js';
import settings from './settings.js';

const resetGame = () => {
  gameBoard.svgFrame.remove();
  settings.playerMoveRight = false;
  settings.playerMoveLeft = false;
  settings.playerMoveUp = false;
  settings.playerMoveDown = false;
  startGame();
};

export default resetGame;
