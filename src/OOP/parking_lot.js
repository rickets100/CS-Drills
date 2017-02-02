class ParkingLot {
  constructor (spaces) {
    this.spaces = spaces
    this.customers = new Array(spaces).fill(null)
  }

  vacancies () {
    return this.spaces - this.customers.filter(a => a).length;
  }

  summary () {
    return this.customers.map((customer, i) => `Position ${i + 1}: ${customer || '(empty)'}`)
  }

  park (licensePlate) {
    this.customers[this.customers.indexOf(null)] = licensePlate
  }

  leave (licensePlate) {
    this.customers[this.customers.indexOf(licensePlate)] = null
  }

  compact (licensePlate) {
    for (let i = this.customers.length; i-- ;) {
      let firstEmptySlot = this.customers.indexOf(null)
      if (this.customers[i] && firstEmptySlot < i) {
        this.customers[firstEmptySlot] = this.customers[i]
        this.customers[i] = null
      }
    }
  }
}

module.exports = ParkingLot;
