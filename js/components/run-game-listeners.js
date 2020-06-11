import startGame from './start-game.js';
import resetGame from './reset-game.js';

const addRunGameEventListeners = {
  toStartButton() {
    document
      .querySelector('#start-btn')
      .addEventListener('click', () => { startGame(); });
  },
};

export default addRunGameEventListeners;
