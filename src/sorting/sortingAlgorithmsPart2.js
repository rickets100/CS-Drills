'use strict';

const swap = require('./sort-helpers').swap;
const merge = require('./sort-helpers').merge;
const partition = require('./sort-helpers').partition;

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function quickSort(arr, left=0, right=arr.length - 1) {

  if (left < right) {
    let partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
}

module.exports = {
  mergeSort,
  quickSort
};
