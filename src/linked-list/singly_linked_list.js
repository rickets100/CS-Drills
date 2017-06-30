'use strict'

function Node(val, next=null) {
  this.val = val
  this.next = next
}


function SinglyLinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}


SinglyLinkedList.prototype.__getNodeAt = function(index) {

}


SinglyLinkedList.prototype.push = function(val) {
  // add the node to the list at the tail
  let node = new Node(val)

  if (!this.head) {
    this.head = node
    this.tail = node
  } else {
    let temp = this.tail
    this.tail = node
    temp.next = node
  }
  this.length += 1
  return this
} // push


SinglyLinkedList.prototype.clear = function() {
  this.head = null
  this.tail = null
  this.length = 0
}


SinglyLinkedList.prototype.pop = function() {
  if (!this.length) {
    this.length = 0
    return undefined
  } else if (this.length === 1) {
    let tempValue = this.tail.val
    this.clear()
    return tempValue
  } else {
    let finder = this.head
    let tempValue = this.tail.val

    while (finder.next.next != null) {
      finder = finder.next
    }
    finder.next = null
    this.length -= 1
    this.tail = finder
    return tempValue
  }
}


SinglyLinkedList.prototype.unshift = function(val) {
  console.log('here');
  if (!this.length) {
    console.log('in the if, length is ', this.length);
    this.length = 0
    return
  }
} // unshift


SinglyLinkedList.prototype.shift = function() {
  if (!this.length) {
    this.length = 0
    return
  } else if (this.length === 1){
    this.clear()
    return
  } else {
    console.log('in final else, head is ', this.head)
    let temp = this.head
    this.head = this.head.next
    console.log('now head is ', this.head)
    this.length -= 1
    console.log('length is now ', this.length)
    return temp.value
  }
} // shift


SinglyLinkedList.prototype.get = function(index) {
  if (!this.length) {
    this.length = 0
    return
  } else {
    let finder = this.head
    for (let i=0; i<this.length; i++) {
      if (i === index) {
        return i
      }
    } // for
  }
} // get


SinglyLinkedList.prototype.set = function(index, val) {

}


SinglyLinkedList.prototype.remove = function(index) {

}


SinglyLinkedList.prototype.reverse = function () {

}

module.exports = SinglyLinkedList
