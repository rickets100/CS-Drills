'use strict'
// let testArr = [3, 4, 10, 16, 17, 50, 199, 201, 222, 555]

var DoublyLinkedList = require('./doubly_linked_list')
var mergeSort = require('../sorting/sortingAlgorithmsPart2')

function SortedLinkedList() {
  
  this._list = new DoublyLinkedList()

  // empty
  if (!this._list) {
    return null
  }

  // single item
  if (this._list.length === 1) {
    return this._list
  }

  // at least 2 items
  let arr = this._list.toArray()

  arr = mergeSort(arr)
  console.log(arr)
}

module.exports = SortedLinkedList

// SortedLinkedList(testArr)
