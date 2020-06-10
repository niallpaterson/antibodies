import tokens from './tokens.js';

const runNpcMovementIntervals = () => {
  setInterval(() => {
    tokens.npcs.forEach((npc) => {
      if (npc.moveUp && !(npc.isByNorthWall())) { npc.moveToken('up'); }
      if (npc.moveDown && !(npc.isBySouthWall())) { npc.moveToken('down'); }
      if (npc.moveRight && !(npc.isByEastWall())) { npc.moveToken('right'); }
      if (npc.moveLeft && !(npc.isByWestWall())) { npc.moveToken('left'); }
    });
  }, 10);
};

export default runNpcMovementIntervals;
