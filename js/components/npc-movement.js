import tokens from './tokens.js';

const npcIntervals = {
  intervalsOn: false,
  lockIntervals() {
    this.intervalsOn = true;
  },
  moveNpcs() {
    if (!this.intervalsOn) {
      setInterval(() => {
        tokens.npcs.forEach((npc) => {
          if (npc.isOnBoard) {
            if (npc.moveUp && !(npc.isByNorthWall()) && !(npc.isBySupermarketWall())) { npc.moveToken('up'); }
            if (npc.moveDown && !(npc.isBySouthWall()) && !(npc.isByHomeWall())) { npc.moveToken('down'); }
            if (npc.moveRight && !(npc.isByEastWall()) && !(npc.isBySupermarketWall())) { npc.moveToken('right'); }
            if (npc.moveLeft && !(npc.isByWestWall()) && !(npc.isByHomeWall())) { npc.moveToken('left'); }
          }
        });
      }, 10);
    }
    return this;
  },
  randomlySetMoveDirection() {
    if (!this.intervalsOn) {
      setInterval(() => {
        tokens.npcs.forEach((npc) => {
          const randomNumber = Math.random();
          if (randomNumber < 0.25) {
            npc.moveUp = true;
            npc.moveDown = false;
            npc.moveLeft = false;
            npc.moveRight = false;
          } else if (randomNumber <= 0.5) {
            npc.moveUp = false;
            npc.moveDown = true;
            npc.moveLeft = false;
            npc.moveRight = false;
          } else if (randomNumber <= 0.75) {
            npc.moveUp = false;
            npc.moveDown = false;
            npc.moveLeft = true;
            npc.moveRight = false;
          } else {
            npc.moveUp = false;
            npc.moveDown = false;
            npc.moveLeft = false;
            npc.moveRight = true;
          }
        });
      }, 250);
    }
    return this;
  },
};

export default npcIntervals;
