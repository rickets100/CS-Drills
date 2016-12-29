var Passenger = require('./passenger');

class Bus {
  constructor(capacity) {
    this.capacity = capacity
    this.passengers = []
  }

  vacancies() {
    return this.capacity - this.passengers.length
  }

  board(passenger, fare) {
    this.passengers.push({passenger,fare})
  }

  passengerNames() {
    return this.passengers.map(obj => `${obj.passenger.name} (${obj.passenger.id})`)
  }

  switchSeats(passenger1, passenger2) {
    let idx1 = this.passengers.map(p => p.passenger).indexOf(passenger1)
    let idx2 = this.passengers.map(p => p.passenger).indexOf(passenger2)
    let tmp = this.passengers[idx1]
    this.passengers[idx1] = this.passengers[idx2]
    this.passengers[idx2] = tmp
  }

  paidFares() {
    return this.passengers.map(p => p.fare).reduce((a,b) => a + b)
  }
}

module.exports = Bus;
