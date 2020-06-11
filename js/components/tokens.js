import Npc from './Npc.js';
import Player from './Player.js'

const tokens = {
  npcCounter: 0,
  npcs: [
    new Npc('Geraldine', 62, 43, true),
    new Npc('Keith', 125, 54),
    new Npc('Dorothy', 175, 35),
    new Npc('Jezebel', 117, 87),
    new Npc('Baloo', 26, 158),
    new Npc('Sheila', 90, 173),
    new Npc('Dotty', 260, 100),
    new Npc('Ollie', 236, 158),
    new Npc('Ethan', 190, 253),
    new Npc('Matt', 117, 268),
    new Npc('Shea', 70, 80),
  ],
  makeNpc() {
    if (this.npcCounter < this.npcs.length) {
      this.npcs[this.npcCounter]
        .drawToken();
      this.npcCounter += 1;
    }
    return this;
  },
  player: new Player('player', 25, 275),
};

export default tokens;
