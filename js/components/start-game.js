import addEventListeners from './key-event-listeners.js';
import npcIntervals from './npc-movement.js';
import tokens from './tokens.js';
import collisionIntervals from './collisions.js';

const startGame = () => {
  tokens.player.resetCoordinates();
  tokens.makeNpc().makeNpc().makeNpc();

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
