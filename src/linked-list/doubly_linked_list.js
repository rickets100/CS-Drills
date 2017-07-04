'use strict';

function Node(val, next, prev) {
  this.val = val
  this.next = next
  this.prev = prev
}

// ===== DOUBLY LINKED LIST =====
function DoublyLinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}

// ===== GET NODE AT =====
DoublyLinkedList.prototype.__getNodeAt = function(index) {
  let counter = 0
  let finder = this.head

  // empty
  if (!this) {
    return null
  }

  // not empty
  while (finder) {
    if (counter === index) {
      return finder.val
    }
    counter++
    finder = finder.next
  }
} // function

// ===== PUSH =====
DoublyLinkedList.prototype.push = function(val) {
  // add the node to the list at the tail
  let node = new Node(val)

  if (!this.head) {
    this.head = node
    this.tail = node
  } else {
    let temp = this.tail
    this.tail = node
    temp.next = node
    node.prev = temp
  }
  this.length += 1
  return this
} // function

DoublyLinkedList.prototype.clear = function() {
  this.head = null
  this.tail = null
  this.length = 0
}

DoublyLinkedList.prototype.pop = function() {
  // empty
  if (this.length === 0) {
    return undefined

  // single item
  } else if (this.length === 1) {
    let tempValue = this.tail.val
    this.clear()
    return tempValue

  // multiple items
  } else {
    let tempValue = this.tail.val
    this.tail.prev.next = undefined
    this.length -= 1
    return tempValue
  }
} // function

DoublyLinkedList.prototype.unshift = function(val) {

}

DoublyLinkedList.prototype.shift = function() {

}

DoublyLinkedList.prototype.get = function(index) {

}

DoublyLinkedList.prototype.set = function(index, val) {

}

DoublyLinkedList.prototype.insert = function(index, val) {

}

DoublyLinkedList.prototype.remove = function(index) {

}

module.exports = DoublyLinkedList
