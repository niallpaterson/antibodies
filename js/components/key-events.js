import tokens from './tokens.js';

const addEventListeners = {
  forTokenMovement() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyW':
          tokens.player.moveToken('up');
          break;
        case 'KeyA':
          tokens.player.moveToken('left');
          break;
        case 'KeyS':
          tokens.player.moveToken('down');
          break;
        case 'KeyD':
          tokens.player.moveToken('right');
          break;

        // no default
      }
    });
    return this;
  },
  forCheckingBuildingDistances() {
    document.addEventListener('keydown', () => {
      tokens.player.checkShopDistance().checkHomeDistance();
    });

    document.addEventListener('keyup', () => {
      tokens.player.checkShopDistance().checkHomeDistance();
    });
    return this;
  },
};

export default addEventListeners;
