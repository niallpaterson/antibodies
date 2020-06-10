import startGame from './start-game.js';
import gameBoard from './game-board.js';

const resetGame = () => {
  gameBoard.svgFrame.remove();
  startGame();
};

export default resetGame;
