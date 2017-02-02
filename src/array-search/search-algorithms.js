'use strict';

exports.linearSearch = function(array, val) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) return i;
  }
  return -1;
};

exports.binarySearch = function binarySearch(array, value, min = 0, max = array.length) {
  if (min > max) return -1;
  const halfway = Math.floor((min + max) / 2);
  if (value === array[halfway]) return halfway;
  if (array[halfway] < value) return binarySearch(array, value, halfway + 1, max);
  return binarySearch(array, value, min, halfway - 1);
};

// Iterative approach
// exports.binarySearch = function(array, val){
//   let left = 0;
//   let right = array.length - 1;
//   let mid = Math.floor( (left + right + 1) / 2);
//   let curVal = array[mid];
//
//   while (curVal !== val) {
//     if (val < curVal) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//     mid = Math.floor( (left + right + 1) / 2);
//     if (left > right) return -1;
//     curVal = array[mid];
//   }
//
//   return mid;
// };
