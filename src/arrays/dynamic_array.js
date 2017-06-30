const FixedArray = require('./fixed_array')

class DynamicArray {
  constructor(length) {
    this.length = length

    // Initialize the array for twice the length
    this.array = new FixedArray(length * 2)
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds')
    }

    return this.array.get(index)
  }

  set(index, item) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds')
    }

    this.array.set(index, item)
  }

  // Implement a method push that takes in one argument, item (a number), it
  // adds the item to the end of the array, copying it to a new FixedArray if
  // necessary. There is no need to return anything.
  push(item) {
    let i=0
    while (this.array[i]) {
      i++
    }
    if (i<array.length-1) {
      array[i] = item
    } else {
      //make an entirely new array because you have run out of space
    }
  }

  // Implement a method pop that does not take in any arguments. It deletes the
  // item at the end of the array.
  pop() {
    if (array.length) {
      let temp = array[array.length] // in case this needs to be returned
      array[array.length] = undefined
    }
  }

  // Implement a method del that takes in one argument, index (a number), it
  // deletes the item at that index. There is no need to return anything.
  del(index) {
    if (array.length) {
      if (index <= array.length ) {
        let segment1 = array.slice(0,array[index])
        let segment2 = array.slice(array[index+1])
        let newArray = segment1.concat(segment2)
      } // end if index less than or equal to the length
    } // end if length non-zero
  } // end del function
} // end class

module.exports = DynamicArray
