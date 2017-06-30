'use strict'

function Node(val, next=null) {
  this.val = val
  this.next = next
}


// ===== SINGLY LINKED LIST =====
function SinglyLinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}


// ===== GET NODE AT =====
SinglyLinkedList.prototype.__getNodeAt = function(index) {

}


// ===== PUSH =====
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


// ===== CLEAR =====
SinglyLinkedList.prototype.clear = function() {
  this.head = null
  this.tail = null
  this.length = 0
}


// ===== POP =====
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

// ===== UNSHIFT =====
SinglyLinkedList.prototype.unshift = function(val) {
  // console.log('here');
  if (!this.length) {
    // console.log('in the if, length is ', this.length);
    this.length = 0
    return
  }
} // unshift


// ===== SHIFT =====
SinglyLinkedList.prototype.shift = function() {
  if (!this.length) {
    this.length = 0
    return
  } else if (this.length === 1){
    this.clear()
    return
  } else {
    // console.log('in final else, head is ', this.head)
    let temp = this.head
    this.head = this.head.next
    // console.log('now head is ', this.head)
    this.length -= 1
    // console.log('length is now ', this.length)
    return temp.value
  }
} // shift


// ===== GET =====
SinglyLinkedList.prototype.get = function(index) {
  if (!this.length) {
    this.length = 0
    return
  } else {
    let finder = this.head
    let counter = -1

    while (counter < this.length-1) {
      counter++

      if (counter === index) {
        return finder.val
      } else {
        if (finder.next != null) {
          finder = finder.next
        }
      }
    } // while
  }
} // get


// ===== SET =====
SinglyLinkedList.prototype.set = function(index, val) {
  if (!this.length) {
    this.length = 0
    return
  } else {
    let finder = this.head
    for (let i=0; i<this.length; i++) {
      if (i === index) {
        console.log('i === index ', i, '=', index)
        console.log('finder.val is currently ', finder.val);
        finder.val = val
        console.log('finder.val is currently ', finder.val)

        return val
      }
    } // for
  }
} // set



// ===== REMOVE =====
SinglyLinkedList.prototype.remove = function(index) {

}


// ===== REVERSE =====
SinglyLinkedList.prototype.reverse = function () {

}

module.exports = SinglyLinkedList
