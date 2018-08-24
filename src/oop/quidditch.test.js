const { Quidditch } = require('./quidditch')

describe('Quidditch', () => {
  it('works', () => {
    const quidditchMatch = new Quidditch()
    quidditchMatch.score()
    quidditchMatch.score()
    expect(quidditchMatch.hasEnded()).toBeFalsy()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    expect(quidditchMatch.hasEnded()).toBeFalsy()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    quidditchMatch.score()
    expect(quidditchMatch.hasEnded()).toBeTruthy()
  })
})
