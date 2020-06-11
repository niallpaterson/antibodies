import tokens from './tokens.js';

const addEventListeners = {
  forTokenMovement() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyW':
          tokens.player.moveUp = true;
          break;
        case 'KeyA':
          tokens.player.moveLeft = true;
          break;
        case 'KeyS':
          tokens.player.moveDown = true;
          break;
        case 'KeyD':
          tokens.player.moveRight = true;
          break;

        // no default
      }
    });
    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'KeyW':
          tokens.player.moveUp = false;
          break;
        case 'KeyA':
          tokens.player.moveLeft = false;
          break;
        case 'KeyS':
          tokens.player.moveDown = false;
          break;
        case 'KeyD':
          tokens.player.moveRight = false;
          break;

        // no default
      }
    });
    return this;
  },
  forCheckingTokenDistances() {
    document.addEventListener('keydown', () => {
      tokens.player
        .checkShopDistance()
        .checkHomeDistance();
    });

    document.addEventListener('keyup', () => {
      tokens.player
        .checkShopDistance()
        .checkHomeDistance();
    });
    return this;
  },
};

export default addEventListeners;
