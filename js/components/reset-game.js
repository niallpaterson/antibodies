import tokens from './tokens.js';
import gameBoard from './game-board.js';
import scoreCounter from './score-counter.js';

const resetGame = (infectorName) => {
  gameBoard.text.text(`INFECTED!!! \n\n\n infector: ${infectorName}. \n\n\n stockpile: ${scoreCounter.score}`);
  gameBoard.showMenu();

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
