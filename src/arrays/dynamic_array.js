const FixedArray = require('./fixed_array');

class DynamicArray {
  constructor(length) {
    this.length = length;

    // Initialize the array for twice the length
    this.array = new FixedArray(length * 2);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    return this.array.get(index);
  }

  set(index, item) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    this.array.set(index, item);
  }

  // Implement a method push that takes in one argument, item (a number), it
  // adds the item to the end of the array, copying it to a new FixedArray if
  // necessary. There is no need to return anything.
  push(item) {
    function doubleArray(array) {
      let newFixed = new FixedArray(array.length * 2);
      for (var i = 0; i < array.length; i++) {
        newFixed.set(i,array.get(i));
      }
      return newFixed;
    }

    if (this.length < this.array.length) {
      this.array.set(this.length, item);
      this.length++;
    } else {
      this.array = doubleArray(this.array);
      this.array.set(this.length, item);
      this.length++;
    }
  }

  // Implement a method pop that does not take in any arguments. It delete the
  // item at the end of the array.
  pop() {
    this.array.set(this.length - 1, undefined);
    this.length--;
  }

  // Implement a method del that takes in one argument, index (a number), it
  // deletes the item at that index. There is no need to return anything.
  del(index) {
    function arrayDelete(array, index) {
      let newFixed = new FixedArray(array.length);
      let counter = 0;
      for (var i = 0; i < array.length; i++) {
        if (i !== index) {
          newFixed.set(counter, array.get(i));
          counter++;
        }
      }
      return newFixed;
    }
    this.array = arrayDelete(this.array, index);
    this.length--;
  }

}

module.exports = DynamicArray;
