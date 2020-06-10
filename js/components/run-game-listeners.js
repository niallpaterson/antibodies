import startGame from './start-game.js';
import resetGame from './reset-game.js';

const addRunGameEventListeners = {
  gameHasBeenStarted: false,
  toStartButton() {
    document
      .querySelector('#start-btn')
      .addEventListener('click', () => {
        if (!this.gameHasBeenStarted) {
          this.gameHasBeenStarted = true;
          startGame();
        } else {
          resetGame();
        }
      });
  },
};

export default addRunGameEventListeners;
