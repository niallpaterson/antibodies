import tokens from './tokens.js';
import scoreCounter from './score-counter.js';

const resetGame = () => {
  tokens.npcCounter = 0;
  tokens.npcs.forEach((npc) => {
    npc
      .resetCoordinates()
      .resetInfection()
      .removeToken();
  });

  tokens.player.token.remove();
  tokens.player.hasShopping = false;
  tokens.player.moveUp = false;
  tokens.player.moveDown = false;
  tokens.player.moveRight = false;
  tokens.player.moveLeft = false;
  tokens.player.isInfected = false;

  scoreCounter.reset();
};

export default resetGame;
