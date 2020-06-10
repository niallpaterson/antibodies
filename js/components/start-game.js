import addEventListeners from './key-events.js';
import tokens from './tokens.js';
import npcIntervals from './npc-movement.js'

const startGame = () => {
  tokens.npcs.forEach((token) => {
    token.drawToken();
  });
  if (!(npcIntervals.intervalsOn)) {
    npcIntervals.randomlySetMoveDirection();
    npcIntervals.moveNpcs();
    npcIntervals.intervalsOn = true;
  }
  tokens.player.drawToken();

  addEventListeners
    .forTokenMovement()
    .forCheckingTokenDistances();
};

export default startGame;
