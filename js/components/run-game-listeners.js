import startGame from './start-game.js';
import resetGame from './reset-game.js';

const addRunGameEventListeners = {
  gameIsRunning: false,
  toStartButton() {
    document
      .querySelector('#start-btn')
      .addEventListener('click', () => {
        if (!this.gameIsRunning) {
          startGame();
          this.gameIsRunning = true;
        } else {
          resetGame();
          startGame();
        }
      });
  },
};

export default addRunGameEventListeners;
