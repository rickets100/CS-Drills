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
  console.log('in push');
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
  // console.log('TOP OF FUNCTION, INDEX IS ',index, 'val is ', val)
  if (!this.length) {
    this.length = 0
    return
  } else {
    let finder = this.head
    let counter = -1

    while (counter < this.length) {
      counter++

      if (counter === index) {
        // console.log('Match!', counter, '=', index)
        finder.val = val
        // console.log('finder.val is ', val);
        return
      }
      if (finder.next != null) {
        finder = finder.next
      }
    }
  } // else
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
  console.log('in the reverse function, length is ', this.length)

} // reverse

module.exports = SinglyLinkedList
