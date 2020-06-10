import Npc from './Npc.js';
import Player from './Player.js'

const tokens = {
  npcs: [
    new Npc('geraldine', 62, 43),
    new Npc('keith', 125, 54),
    new Npc('dorothy', 175, 35),
    new Npc('jezebel', 117, 87),
    new Npc('baloo', 26, 158),
    new Npc('sheila', 90, 173),
    new Npc('dotty', 260, 100),
    new Npc('ollie', 236, 158),
    new Npc('ethan', 190, 253),
    new Npc('genie', 205, 202),
    new Npc('matt', 117, 268),
    new Npc('shea', 70, 80),
  ],
  player: new Player('player', 25, 275),
};

export default tokens;
