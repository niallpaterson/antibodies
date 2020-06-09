import tokens from './tokens.js';

const addEventListeners = {
  forTokenMovement() {
    document.addEventListener('keydown', (event) => {
      console.log(event.code)
      switch (event.code) {
        case 'KeyW':
          tokens[12].moveToken('up');
          break;
        case 'KeyA':
          tokens[12].moveToken('left');
          break;
        case 'KeyS':
          tokens[12].moveToken('down');
          break;
        case 'KeyD':
          tokens[12].moveToken('right');
          break;

        // no default
      }
    });
    return this;
  },
};

export default addEventListeners;
