import addEventListeners from './key-events.js';
import tokens from './tokens.js';
import npcIntervals from './npc-movement.js';
import collisionIntervals from './collisions.js';

const startGame = () => {
  tokens.npcs.forEach((token) => {
    token.drawToken();
  });

  npcIntervals
    .randomlySetMoveDirection()
    .moveNpcs()
    .lockIntervals();

  tokens.player.drawToken();

  collisionIntervals
    .forNpcs()
    .forPlayer();

  addEventListeners
    .forTokenMovement()
    .forCheckingTokenDistances();
};

export default startGame;
