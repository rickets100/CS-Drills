'use strict';

/*
  A Circular Linked List is a list where head.prev points to tail and
  tail.next points to head. Complete this linked list with a significantly
  reduced API.
*/

function Node(val, next, prev) {
  this.value = val
  this.next = next
  this.prev = prev
}

function CircularLinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}

/*
  Add an item to the list -- the new node becomes the tail of the list.
*/
// ===== ADD =====
CircularLinkedList.prototype.add = function(val) {
  let newNode = new Node(val, null, null)

  if (this.length === 0) {
    this.head = newNode
    this.tail = newNode
    this.tail.next = this.head
    this.length += 1
    return this
  }
  newNode.prev = this.tail
  newNode.next = this.head
  this.head.prev = newNode
  this.tail.next = newNode
  this.tail = newNode
  this.length += 1
  return this

}

/*
  Remove and return the val of the current tail.
*/
CircularLinkedList.prototype.removeLast = function() {

  // empty
  if (!this) {
    return null
  }

  // single item
  if (this.length === 1) {
    let temp = this.head.value
    this.head = null
    this.tail = null
    this.length = 0
    return temp
  }

  // 2 items

  if (this.length === 2) {
    let temp = this.tail.value
    this.head.next = this.head
    this.head.prev = this.head
    this.tail = this.head
    this.length -= 1
    return temp
  }

  // at least 2 items
  let temp = this.tail.val
  this.head.prev = this.tail.prev
  this.tail.prev.next = this.head
  this.tail = this.tail.prev
  this.length -= 1
  return temp
}

module.exports = CircularLinkedList
