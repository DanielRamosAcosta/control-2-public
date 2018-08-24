const { Partido } = require('./partido')

class Quidditch extends Partido{
  constructor () {
    super(10, 150)
  }
}

module.exports = {
  Quidditch
}