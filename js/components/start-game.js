import addEventListeners from './key-events.js';
import tokens from './tokens.js';
import npcIntervals from './npc-movement.js'

const startGame = () => {
  tokens.npcs.forEach((token) => {
    token.drawToken();
  });

  npcIntervals
    .randomlySetMoveDirection()
    .moveNpcs()
    .lockIntervals();

  tokens.player.drawToken();

  addEventListeners
    .forTokenMovement()
    .forCheckingTokenDistances();
};

export default startGame;
