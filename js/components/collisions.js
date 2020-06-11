import tokens from './tokens.js';
import resetGame from './reset-game.js';

const collisionIntervals = {
  intervalsOn: false,
  lockIntervals() {
    this.intervalsOn = true;
  },
  forNpcs() {
    if (!this.intervalsOn) {
      setInterval(() => {
        tokens.npcs.forEach((npc) => {
          if (npc.isOnBoard) {
            tokens.npcs.forEach((otherNpc) => {
              if (otherNpc.isOnBoard && npc !== otherNpc && this.hasCollided(npc, otherNpc) && npc.isInfected) {
                otherNpc.isInfected = true;
                otherNpc.token
                  .animate(1000, 0, 'now').attr({ fill: '#FFCC00' })
                  .animate(1000, 0, 'after').attr({ fill: '#86026F' });
              }
            });
          };
        });
      }, 100);
    }
    return this;
  },
  forPlayer() {
    if (!this.intervalsOn) {
      setInterval(() => {
        tokens.npcs.forEach((npc) => {
          if (this.hasCollided(tokens.player, npc) && npc.isInfected) {
            resetGame();
          }
        });
      }, 100);
    }
    return this;
  },
  hasCollided(pers1, pers2) {
    return Math.sqrt(
      ((pers1.currentX - pers2.currentX)
    * (pers1.currentX - pers2.currentX))
    + ((pers1.currentY - pers2.currentY)
    * (pers1.currentY - pers2.currentY))
    ) <= 15;
  },
};

export default collisionIntervals;
