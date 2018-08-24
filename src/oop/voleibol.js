const { Partido } = require('./partido')

class Voleibol extends Partido{
  constructor () {
    super(1, 5)
  }
}

module.exports = {
  Voleibol
}