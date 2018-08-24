const { API } = require('../no-tocar/friends-api')

const selectFromUser = key => user => user[key]

const getFriendsIds = selectFromUser('friends')
const getName = selectFromUser('name')

const mapElementsTo = mapperFn => array => array.map(mapperFn)
const flatPromises = promises => Promise.all(promises)

const mapUsersTo = mapElementsTo
const mapUsersIdsTo = mapElementsTo

// const promises = ids.map(API.getUserData)
// return Promise.all(promises)

const getDataFromIds = usersIds =>
  Promise.resolve(usersIds)
    .then(mapUsersIdsTo(API.getUserData))
    .then(flatPromises)

const getFriendsNamesOfUser = user =>
  Promise.resolve(user)
    .then(getFriendsIds)
    .then(getDataFromIds)
    .then(mapUsersTo(getName))

const callIfExists = fn => something => something ? fn(something) : null

const getFriendsNamesOf = userId =>
  API.getUserData(userId)
    .then(callIfExists(getFriendsNamesOfUser))
    

module.exports = {
  getFriendsNamesOf
}
