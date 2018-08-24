const { Voleibol } = require('./voleibol')

describe('Voleibol', () => {
  it('works', () => {
    const voleibolMatch = new Voleibol()
    voleibolMatch.score()
    voleibolMatch.score()
    expect(voleibolMatch.hasEnded()).toBeFalsy()
    voleibolMatch.score()
    voleibolMatch.score()
    voleibolMatch.score()
    expect(voleibolMatch.hasEnded()).toBeTruthy()
  })
})
