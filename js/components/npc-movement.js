import tokens from './tokens.js';

const runNpcMovementIntervals = () => {
  setInterval(() => {
    tokens.npcs.forEach((npc) => {
      if (npc.moveUp && !(npc.isByNorthWall()) && !(npc.isBySupermarketWall())) { npc.moveToken('up'); }
      if (npc.moveDown && !(npc.isBySouthWall()) && !(npc.isByHomeWall())) { npc.moveToken('down'); }
      if (npc.moveRight && !(npc.isByEastWall()) && !(npc.isBySupermarketWall())) { npc.moveToken('right'); }
      if (npc.moveLeft && !(npc.isByWestWall()) && !(npc.isByHomeWall())) { npc.moveToken('left'); }
    });
  }, 10);
};

export default runNpcMovementIntervals;
