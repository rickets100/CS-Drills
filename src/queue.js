'use strict'

// Implement a queue using a doubly-linked list with a head/tail pointer
// Make enqueue(), dequeue() and size() all run in O(1) time

// See test/queue.test.js, this function, when called, should return a new object
// which represents a queue. 
module.exports = function(){
  let head, tail, length = 0;

  return { enqueue, dequeue, size }

  function size() {
    return length;
  }

  function enqueue(value){
    length++;
    if (!head) {
      tail = head = {value}
    } else {
      let node = {value, next: head}
      head.previous = node
      head = node
    }
  }

  function dequeue(){
    if (!tail) return;

    length--;
    let result = tail.value;
    let newTail = tail.previous
    if (newTail) {
      delete newTail.next
      tail = newTail
    } else {
      head = undefined;
      tail = undefined;
    }
    return result;
  }
}
