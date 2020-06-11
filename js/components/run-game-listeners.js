import startGame from './start-game.js';

const addRunGameEventListeners = {
  toStartButton() {
    document
      .querySelector('#start-btn')
      .addEventListener('click', () => { startGame(); });
  },
};

export default addRunGameEventListeners;
