import startGame from './start-game.js';
import gameBoard from './game-board.js';
import tokens from './tokens.js';

const resetGame = () => {
  tokens.npcs.forEach((npc) => {
    npc.token.remove();
  });
  tokens.player.token.remove();

  tokens.player.moveUp = false;
  tokens.player.moveDown = false;
  tokens.player.moveRight = false;
  tokens.player.moveLeft = false;
  startGame();
};

export default resetGame;
