const scoreCounter = {
  score: 0,
  increment() {
    this.score += 1;
    document.querySelector('#score-counter').textContent = `Shopping Trips: ${this.score}`;
  },
  reset() {
    this.score = 0;
    document.querySelector('#score-counter').textContent = 'Shopping Trips: 0';
  },
};

export default scoreCounter;
