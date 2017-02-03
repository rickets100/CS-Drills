class Car {
  constructor (mpg) {
    this.mpg = mpg;
    this.gallons = 0;
    this.tripArray = [];
  }

  fill(gallons) {
    this.gallons += gallons;
  }

  drive(miles) {
    this.tripArray.push(miles);
    this.gallons -= miles / this.mpg;
  }

  odometer() {
    return this.tripArray.reduce((a,b) => a + b, 0);
  }

  trips() {
    return this.tripArray.map(t => `${t} miles`);
  }
}

module.exports = Car;
