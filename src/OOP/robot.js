class Robot {

  constructor (energy) {
    this.energy = energy
    this.coordinates = [0,0]
    this.moves = []
  }

  position () {
    return this.coordinates
  }

  battery () {
    return this.energy
  }

  moveUp () {
    this.moves.push('up')
    this.coordinates[1]++
  }

  moveLeft () {
    this.moves.push('left')
    this.coordinates[0]--
  }

  history () {
    return this.moves
  }

}

module.exports = Robot;
