import startGame from './start-game.js';
import resetGame from './reset-game.js';

const addRunGameEventListeners = {
  gameHasStarted: false,
  toStartButton() {
    document
      .querySelector('#start-btn')
      .addEventListener('click', () => {
        if (this.gameHasStarted === false) {
          startGame();
          this.gameHasStarted = true;
        } else {
          resetGame();
        }
      });
  },
};

export default addRunGameEventListeners;
