import tokens from './tokens.js';

const runPlayerMovementIntervals = () => {
  setInterval(() => {
    if (tokens.player.moveUp === true) {
      tokens.player.moveToken('up');
    }
    if (tokens.player.moveDown === true) {
      tokens.player.moveToken('down');
    }
    if (tokens.player.moveRight === true) {
      tokens.player.moveToken('right');
    }
    if (tokens.player.moveLeft === true) {
      tokens.player.moveToken('left');
    }
  }, 10);
};

export default runPlayerMovementIntervals;
