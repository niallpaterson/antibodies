const scoreCounter = {
  score: 0,
  increment() {
    this.score += 1;
    document.querySelector('#score-counter').textContent = this.score;
  },
  reset() {
    this.score = 0;
    document.querySelector('#score-counter').textContent = '0';
  },
};

export default scoreCounter;
