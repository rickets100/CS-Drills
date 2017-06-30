'use strict';
let testArray1 = [4,8,9,22,115,600,601,606,777]

/*exports.linearSearch = */
function linearSearch(array, val) {
  array.forEach(function(el, index) {
    if (el === val) {
      console.log("found the value, it is at index ", index)
      return index
    }
  })
  console.log("item not found")
  return -1
}

exports.binarySearch = function(array, value, min = 0, max = array.length) {
  let length = array.length
  let midpoint = length?Math.ceil(length/2):0

  while (min <= max) {
    if (value === array[midpoint]) {
      console.log('Found the value. It is at index ', midpoint)
      return value
    } else if (value < array[midpoint]) {
      max = midpoint-1
      length = max-min
      midpoint = length?Math.ceil(length/2):0
    } else {
      min = midpoint+1
      length = max-min
      midpoint = min + (length?Math.ceil(length/2):0)
    }
  } // while
  console.log('item not found.')
  return
}

// ===== BINARY SEARCH =====
function binarySearch(array, value, min = 0, max = array.length) {
  let length = array.length
  let midpoint = length?Math.ceil(length/2):0

  while (min <= max) {
    if (value === array[midpoint]) {
      console.log('Found the value. It is at index ', midpoint)
      return value
    } else if (value < array[midpoint]) {
      max = midpoint-1
      length = max-min
      midpoint = length?Math.ceil(length/2):0
    } else {
      min = midpoint+1
      length = max-min
      midpoint = min + (length?Math.ceil(length/2):0)
    }
  } // while
  console.log('item not found.')
  return
}

// binarySearch(testArray1, 606)
// linearSearch(testArray1, 5)
