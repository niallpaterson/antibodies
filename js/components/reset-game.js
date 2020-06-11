import startGame from './start-game.js';
import tokens from './tokens.js';
import scoreCounter from './score-counter.js';

const resetGame = () => {
  tokens.npcs.forEach((npc) => {
    console.log(tokens.npcs)
    npc.resetCoordinates().resetInfection();
    npc.token.remove();
  });

  // messy! Refactor plz
  for (let i = 0; i <= tokens.npcCounter; i++) {
    tokens.inactiveNpcs.unshift(tokens.npcs.pop());
  }

  tokens.npcCounter = 0;

  tokens.player.token.remove();
  tokens.player.moveUp = false;
  tokens.player.moveDown = false;
  tokens.player.moveRight = false;
  tokens.player.moveLeft = false;
  tokens.player.isInfected = false;
  scoreCounter.reset();  
};

export default resetGame;
