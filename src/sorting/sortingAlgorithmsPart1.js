'use strict';

const swap = require('./sort-helpers').swap;

function bubbleSort(arr) {
  let unsorted = true
  let i = 0

  while (unsorted) {
    unsorted = false
    for (i=0; i<arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        unsorted = true
      } // if
    } // for
  } // while
} // function

let testArray1 = ['y', 'e', 's', 'w', 'b', 'c', 'd', 'p', 'h', 'l']

bubbleSort(testArray1)






// selection sort
function selectionSort(arr) {
  // let sorted = []
  // let unsorted = arr
  // let min = 0
  // let returnArray = []
  //
  // if (arr.length) {
  //   currentMin = arr[0]
  // }
  //
  // while (unsorted) {
  //   for (i=0; i<unsorted.length; i++) {
  //     if (currentMin>unsorted[i]) {
  //       let currentMin = arr[i]
  //     }
  //   }
  //   // take the first element from incoming array, push it onto the return array
  //   returnArray.push(unsorted.shift())
  // }
  //
  // returnArray.push(arr.splice(arr.length-i))
}




function insertionSort(arr) {

}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
}
