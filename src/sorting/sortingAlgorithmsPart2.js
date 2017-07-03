'use strict';

const swap = require('./sort-helpers').swap
const merge = require('./sort-helpers').merge
const partition = require('./sort-helpers').partition

let array1 = [1, 3, 6, 22, 55]
let array2 = [16, 17, 4, 222, 10]
let array3 = [555, 16, 3, 222, 17, 50, 4, 199, 201, 10]



// ============ MERGE SORT ================
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let middle = Math.floor(arr.length/2)
  let leftUnsorted = arr.slice(0, middle) // left half of the array
  let rightUnsorted = arr.slice(middle) // right half of the array
  let left = mergeSort(leftUnsorted)
  let right = mergeSort(rightUnsorted)
  return merge(left, right)

} // function mergeSort


function quickSort(arr) {

}

module.exports = {
  mergeSort,
  quickSort
}

console.log(mergeSort(array3))
