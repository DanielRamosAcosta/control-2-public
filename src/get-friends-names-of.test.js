const { getFriendsNamesOf } = require('./get-friends-names-of')

describe('findFirstCapitalLetter', () => {
  xit('finds friends of user with id', async () => {
    const result = await getFriendsNamesOf('323')
    expect(result).toEqual(['Laura', 'Tomás'])
  })
  xit('finds friends of user with id', async () => {
    const result = await getFriendsNamesOf('491')
    expect(result).toEqual(['Juan'])
  })
})
