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
          tokens.npcs.forEach((otherNpc) => {
            if (npc !== otherNpc && this.hasCollided(npc, person2) && npc.isInfected) {
              // otherNpc.isInfected = true;
            }
          });
        });
      }, 10);
    }
    return this;
  },
  forPlayer() {
    if (!this.intervalsOn) {
      setInterval(() => {
        tokens.npcs.forEach((npc) => {
          if (this.hasCollided(tokens.player, npc) && npc.isInfected) {
            // player.isInfected = true;
            resetGame();
          }
        });
      }, 10);
    }
    return this;
  },
  hasCollided(person1, person2) {
    // person1.token is in the same space as person2.token;
  },
};

export default collisionIntervals;
