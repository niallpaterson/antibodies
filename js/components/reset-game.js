import startGame from './start-game.js';
import tokens from './tokens.js';
import scoreCounter from './score-counter.js';

const resetGame = () => {
  tokens.npcs.forEach((npc) => {
    npc.token.remove();
  });
  tokens.player.token.remove();

  tokens.player.moveUp = false;
  tokens.player.moveDown = false;
  tokens.player.moveRight = false;
  tokens.player.moveLeft = false;
  scoreCounter.reset();
  startGame();
};

export default resetGame;
