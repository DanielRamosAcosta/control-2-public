const { findFirstCapitalLetter } = require('./find-first-capital-letter')

describe('findFirstCapitalLetter', () => {
  xit('removes duplicated elements of an array', () => {
    const result = findFirstCapitalLetter('Hola Que Tal')
    expect(result).toEqual('H')
  })
  xit('removes duplicated elements of an array', () => {
    const result = findFirstCapitalLetter('hola Que tal')
    expect(result).toEqual('Q')
  })
  xit('removes duplicated elements of an array', () => {
    const result = findFirstCapitalLetter('hola que tal')
    expect(result).toEqual(null)
  })
})
