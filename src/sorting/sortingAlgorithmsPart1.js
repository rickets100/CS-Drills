'use strict';

const swap = require('./sort-helpers').swap;

// ===== BUBBLE SORT =====
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


// ===== SELECTION SORT =====
function selectionSort(arr) {
  let returnArr = []

  while (arr.length) {
    let currentMin = arr[0]
    let currentMinIndex = 0

    for (let i = 0; i<arr.length; i++) {
      if (arr[i] < currentMin) {
        currentMin = arr[i]
        currentMinIndex = i
      } // if
    } // for
    [arr[0], arr[currentMinIndex]] = [arr[currentMinIndex], arr[0]]
    returnArr.push(arr.shift(arr.length-1))
  } // while
} // function


let testArray1 = [7, 55, 12, 4, 88, 1001, 11, 6, 89999, 43]

// ===== INSERTION SORT =====
function insertionSort(arr) {

}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
}
