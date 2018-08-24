const { findFirstCapitalLetter } = require('./find-first-capital-letter')

describe('findFirstCapitalLetter', () => {
  it('no letters', () => {
    const result = findFirstCapitalLetter('')
    expect(result).toEqual(null)
  })
  it('one letter downcased', () => {
    const result = findFirstCapitalLetter('h')
    expect(result).toEqual(null)
  })
  it('one letter uppercased', () => {
    const result = findFirstCapitalLetter('H')
    expect(result).toEqual('H')
  })
  it('two latters downcased', () => {
    const result = findFirstCapitalLetter('ho')
    expect(result).toEqual(null)
  })
  it('two latters, last one uppercased', () => {
    const result = findFirstCapitalLetter('hO')
    expect(result).toEqual('O')
  })
  it('three latters, last one uppercased', () => {
    const result = findFirstCapitalLetter('hoL')
    expect(result).toEqual('L')
  })
  it('with an space', () => {
    const result = findFirstCapitalLetter(' ')
    expect(result).toEqual(null)
  })
  it('with an dash', () => {
    const result = findFirstCapitalLetter('-')
    expect(result).toEqual(null)
  })
  it('with an dash', () => {
    const result = findFirstCapitalLetter('holÁ')
    expect(result).toEqual('Á')
  })
  it('with russian', () => {
    const result = findFirstCapitalLetter("Я люблю пить водку")
    expect(result).toEqual('Я')
  })
  it('with emojis', () => {
    const result = findFirstCapitalLetter("😂 pero Que 😂")
    expect(result).toEqual('Q')
  })
  it('works', () => {
    const result = findFirstCapitalLetter('Hola Que Tal')
    expect(result).toEqual('H')
  })
  it('works', () => {
    const result = findFirstCapitalLetter('hola Que tal')
    expect(result).toEqual('Q')
  })
  it('works', () => {
    const result = findFirstCapitalLetter('hola que tal')
    expect(result).toEqual(null)
  })
})
