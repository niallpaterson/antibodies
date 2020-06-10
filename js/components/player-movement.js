import tokens from './tokens.js';

const runPlayerMovementIntervals = () => {
  setInterval(() => {
    if (tokens.player.moveUp && !(tokens.player.isByNorthWall())) { tokens.player.moveToken('up'); }
    if (tokens.player.moveDown && !(tokens.player.isBySouthWall())) { tokens.player.moveToken('down'); }
    if (tokens.player.moveRight && !(tokens.player.isByEastWall())) { tokens.player.moveToken('right'); }
    if (tokens.player.moveLeft && !(tokens.player.isByWestWall())) { tokens.player.moveToken('left'); }
  }, 10);
};

export default runPlayerMovementIntervals;
