import gameBoard from './components/game-board.js';
import addRunGameEventListeners from './components/run-game-listeners.js';
import runPlayerMovementIntervals from './components/player-movement.js';
import runNpcMovementIntervals from './components/npc-movement.js';

window.onload = () => {
  gameBoard
    .drawFrame()
    .drawBoard()
    .drawHome()
    .drawSupermarket();

  addRunGameEventListeners
    .toStartButton();

  runPlayerMovementIntervals();
  runNpcMovementIntervals();
};
