class Partido {
  constructor (scoreStep, scoreLimit) {
    this.currentScore = 0
    this.scoreStep = scoreStep
    this.scoreLimit = scoreLimit
  }

  score () {
    this.currentScore += this.scoreStep
  }

  hasEnded () {
    return this.currentScore === this.scoreLimit
  }
}

module.exports = {
  Partido
}