let ll =
{
  value: 'Mary',
  next: {
    value: ' had',
    next: {
      value: ' a',
      next: {
        value: ' little',
        next: {
          value: ' lamb.',
          next: null
        }
      }
    }
  }
}
   // root


// In this exercise, you will build an example queue using a linked list with a
// reference to the tail. In this case, you will implement the methods of a
// queue.
class Queue {
  constructor() {
    this._head = null
    this._tail = null
    this.length = 0
  }

  // The enqueue method will add an item to the internal linked list at the
  // tail. If this is the first time added, it needs to set the tail and the
  // head. Don't forget to update the length field.
  enqueue(value) {
    console.log('enqueue')
    this.length = this.length+1
  }

  // The peek method will return the first item's value in the queue, but it
  // does not remove it from the queue. It will return undefined if there are
  // no items in the queue.
  peek() {
    console.log('peek')
    console.log('first value is ', this.value)
  }

  // The dequeue method will return the first item's value from the linked list
  // as well as remove it from the linked list. It will return undefined if
  // there are no items in the queue. Don't forget to update the length field.
  // Also, if the list is emptied, update the tail to be null as well.
  dequeue() {
    console.log('dequeue');
  }
}

module.exports = Queue


let q = new Queue()

q.peek()
q.enqueue()
