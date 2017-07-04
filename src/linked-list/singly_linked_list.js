const toArray = require('./level1').toArray
const count = require('./level1').count

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
  let counter = 0
  let finder = this.head

  // empty
  if (!this) {
    return null
  }

  // not empty
  while (finder) {
    if (counter === index) {
      return finder.value
    }
    counter++
    finder = finder.next
  }
} // function


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
} // function


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
  let newNode = new Node(val)

  if (!this.length) {
    this.head = newNode
    this.tail = newNode
    this.length = 1
    // return
  } else {
    newNode.next = this.head
    this.head = newNode
    this.length += 1
  }
} // unshift


// ===== SHIFT =====
SinglyLinkedList.prototype.shift = function() {
  if (!this.length) {
    this.length = 0
    return
  } else if (this.length === 1) {
    let temp = this.head
    this.clear()
    return temp.val
  } else {
    let temp = this.head
    this.head = this.head.next
    this.length -= 1
    return temp.val
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
    let counter = -1

    while (counter < this.length) {
      counter++

      if (counter === index) {
        finder.val = val
        return
      }
      if (finder.next != null) {
        finder = finder.next
      }
    }
  }
} // function



// ===== REMOVE =====
SinglyLinkedList.prototype.remove = function(index) {
  // empty
  if (!this.length) {
    this.length = 0
    return

  // single item
  } else if (this.length === 1) {
      let value = this.head.val
      this.clear()
      return value

  // at least two items
  } else {
    let tracker = this.head
    let finder = this.head.next
    let counter = -1

    while (counter < this.length) {
      counter++

      // is match at the very first item?
      if ((counter === index) && (tracker === this.head)) {
          this.head = finder
          return counter
        }

      if (counter+1 === index) {
        // is match the last item?
        if (finder.next === null) {
          tracker.next = null
          this.tail = tracker
          this.length = this.length-1
          return finder.val
        }

        // match is just a normal mid-list item
        tracker.next = finder.next
        this.length = this.length-1
        return finder.val
      }

      // advance the tracker and finder and keep looking
      if (finder.next != null) {
        tracker = finder
        finder = finder.next
      }
    } // while
  } // else
} // function


// ===== REVERSE =====
SinglyLinkedList.prototype.reverse = function () {

  // empty
  if (!this) {
    return undefined
  }

  // single item
  if (this.length === 1) {
    return this
  }

  // multiple items
  let arr = toArray(this)
  let tracker = arr.length-1
  let index = 0
  let finder = this.head

  while (index <= tracker) {
    [arr[index], arr[tracker]] = [arr[tracker], arr[index]]
    index++
    tracker--
  }

  for (i=0; i<arr.length; i++) {
    finder.val = arr[i]
    finder = finder.next
  }
 } // reverse

module.exports = SinglyLinkedList
