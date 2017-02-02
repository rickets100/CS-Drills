class TollRoad {

  constructor(price) {
    this.price = price
    this.trips = {}
    this.payments = {}
  }

  balance (licensePlate) {
    let trips = this.trips[licensePlate]
    if (!trips) return 0;
    let payments = this.payments[licensePlate] || []
    return trips.length * this.price - payments.reduce((a,b) => a + b, 0)
  }

  charge (licensePlate, date) {
    this.trips[licensePlate] = this.trips[licensePlate] || []
    this.trips[licensePlate].unshift(date)
  }

  history (licensePlate) {
    let trips = this.trips[licensePlate]
    if (!trips) return []
    return trips.map(date => `Charged $${this.price} on ${date}`)
  }

  pay (licensePlate, amount) {
    this.payments[licensePlate] = this.payments[licensePlate] || []
    this.payments[licensePlate].push(amount)
  }

}

module.exports = TollRoad;
