const scoreCounter = {
  score: 0,
  increment() {
    this.score += 1;
    document.querySelector('#score-counter').textContent = `shopping trips = ${this.score}`;
  },
  reset() {
    this.score = 0;
    document.querySelector('#score-counter').textContent = 'shopping trips = 0';
  },
};

export default scoreCounter;
