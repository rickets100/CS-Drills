'use strict';

let num1 = 8
let num2 = 4
let testArray1 = []


// ===== SWAP HELPER ======
function swap(arr, idx1, idx2) {
  arr = [idx2, idx1]
  return arr
}


// ===== MERGE HELPER ======
function merge(arr1, arr2) {
  let result = []

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  while (arr1.length) {result.push(arr1.shift())}
  while (arr2.length) {result.push(arr2.shift())}
  return result
}


// ===== PARTITION HELPER ======
function partition(arr, left, right) {

}

module.exports = {
  swap,
  merge,
  partition
}
