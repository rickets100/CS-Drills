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
  console.log('incoming: ', val)
  let newNode = new Node(val, null, null)

  if (this.length === 0) {
    this.head = newNode
    this.tail = newNode
    this.tail.next = this.head
    this.length += 1
    console.log('length=0: ', this.head.value)
    return this
  }

  newNode.prev = this.tail
  newNode.next = this.head
  this.head.prev = newNode
  this.tail.next = newNode
  console.log('length>0: ', this);

}

/*
  Remove and return the val of the current tail.
*/
CircularLinkedList.prototype.removeLast = function() {

  // empty
  if (!this) {
    return null
  }

  let temp = this.tail.val
  this.head.prev = this.tail.prev
  this.tail.prev.next = this.head
  return temp
}

module.exports = CircularLinkedList
