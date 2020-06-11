import addEventListeners from './key-event-listeners.js';
import npcIntervals from './npc-movement.js';
import tokens from './tokens.js';
import collisionIntervals from './collisions.js';
import gameBoard from './game-board.js';
import scoreCounter from './score-counter.js'

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

  scoreCounter.reset();
  gameBoard.hideMenu();
};

export default startGame;
