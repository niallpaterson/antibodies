import addRunGameEventListeners from './components/run-game-listeners.js';
import runPlayerMovementIntervals from './components/player-movement.js';
import runNpcMovementIntervals from './components/npc-movement.js';

window.onload = () => {
  addRunGameEventListeners
    .toStartButton();
  runPlayerMovementIntervals();
  runNpcMovementIntervals();
};
