import tokens from './tokens.js';

const runNpcMovementIntervals = () => {
  setInterval(() => {
    tokens.npcs.forEach((npc) => {
      if (npc.moveUp === true) { npc.moveToken('up'); }
      if (npc.moveDown === true) { npc.moveToken('down'); }
      if (npc.moveRight === true) { npc.moveToken('right'); }
      if (npc.moveLeft === true) { npc.moveToken('left'); }
    });
  }, 10);
};

export default runNpcMovementIntervals;
