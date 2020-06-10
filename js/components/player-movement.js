import settings from './settings.js';
import tokens from './tokens.js';

const runPlayerMovementIntervals = () => {
  setInterval(() => {
    if (settings.playerMoveUp === true) {
      tokens.player.moveToken('up');
    }
    if (settings.playerMoveDown === true) {
      tokens.player.moveToken('down');
    }
    if (settings.playerMoveRight === true) {
      tokens.player.moveToken('right');
    }
    if (settings.playerMoveLeft === true) {
      tokens.player.moveToken('left');
    }
  }, 10);
};

export default runPlayerMovementIntervals;
