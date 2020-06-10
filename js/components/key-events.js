import tokens from './tokens.js';
import settings from './settings.js';

const addEventListeners = {
  forTokenMovement() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyW':
          settings.playerMoveUp = true;
          break;
        case 'KeyA':
          settings.playerMoveLeft = true;
          break;
        case 'KeyS':
          settings.playerMoveDown = true;
          break;
        case 'KeyD':
          settings.playerMoveRight = true;
          break;

        // no default
      }
    });
    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'KeyW':
          settings.playerMoveUp = false;
          break;
        case 'KeyA':
          settings.playerMoveLeft = false;
          break;
        case 'KeyS':
          settings.playerMoveDown = false;
          break;
        case 'KeyD':
          settings.playerMoveRight = false;
          break;

        // no default
      }
    });
    return this;
  },
  forCheckingTokenDistances() {
    document.addEventListener('keydown', () => {
      tokens.player
        .checkNPCDistance()
        .checkShopDistance()
        .checkHomeDistance();
    });

    document.addEventListener('keyup', () => {
      tokens.player
        .checkNPCDistance()
        .checkShopDistance()
        .checkHomeDistance();
    });
    return this;
  },
};

export default addEventListeners;
