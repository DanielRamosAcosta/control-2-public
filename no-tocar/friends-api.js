const users = [
  { id: '323', name: 'Juan', friends: ['421', '491'] },
  { id: '421', name: 'Laura', friends: ['323'] },
  { id: '491', name: 'Tomás', friends: ['323'] }
]

const API = {
  getUserData(id) {
    return Promise.resolve(users.find(u => u.id === id))
  }
}

module.exports = {
  API
}
