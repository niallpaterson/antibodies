import Npc from './Npc.js';
import Player from './Player.js'

const tokens = {
  npcCounter: 0,
  npcs: [
    new Npc('geraldine', 62, 43, true),
    new Npc('keith', 125, 54),
    new Npc('dorothy', 175, 35),
    new Npc('jezebel', 117, 87),
    new Npc('baloo', 26, 158),
    new Npc('sheila', 90, 173),
    new Npc('dotty', 260, 100),
    new Npc('ollie', 236, 158),
    new Npc('ethan', 190, 253),
    new Npc('matt', 117, 268),
    new Npc('shea', 70, 80),
  ],
  makeNpc() {
    if (this.npcCounter < this.npcs.length) {
      tokens.npcs[this.npcCounter]
        .drawToken();
      this.npcCounter += 1;
    }
    return this;
  },
  player: new Player('player', 25, 275),
};

export default tokens;
