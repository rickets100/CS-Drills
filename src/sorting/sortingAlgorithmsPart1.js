'use strict';

const swap = require('./sort-helpers').swap;
let testArray1 = [7, 55, 12, 4, 88, 1001, 11, 6, 89999, 43]
let testArray2 = [17, 5, 102, 994, 88, 1, 11, 6, 99, 43]

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



// ===== INSERTION SORT =====
function insertionSort(arr) {
  for (let i=0; i < arr.length; i++) {
    let j = i-1 // don't want to enter the while loop on first iteration
    let current = arr[i]

      while ((j>=0) && (arr[j] > current)) {
        arr[j+1] = arr[j]
        j = j-1
      } // while
      arr[j+1] = current
  } // for
} // function

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort
}
