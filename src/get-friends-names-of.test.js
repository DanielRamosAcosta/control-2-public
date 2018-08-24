const { getFriendsNamesOf } = require('./get-friends-names-of')

describe('findFirstCapitalLetter', () => {
  it('finds friends of user with id', async () => {
    const result = await getFriendsNamesOf('323')
    expect(result).toEqual(['Laura', 'Tomás'])
  })
  it('finds friends of user with id', async () => {
    const result = await getFriendsNamesOf('491')
    expect(result).toEqual(['Juan'])
  })
  xit('finds friends of user with id', async () => {
    const result = await getFriendsNamesOf('234234234')
    expect(result).toEqual(null)
  })
})
