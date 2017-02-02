function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.next = null;
  this.prev = null;
  this.value = val;
}

function DoublyLinkedList() {
  LinkedList.apply(this);
}

DoublyLinkedList.prototype = Object.create(LinkedList.prototype);
DoublyLinkedList.prototype.constructor = DoublyLinkedList;

function CircularLinkedList() {
  LinkedList.apply(this);
}

CircularLinkedList.prototype = Object.create(LinkedList.prototype);
CircularLinkedList.prototype.constructor = CircularLinkedList;

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
module.exports.CircularLinkedList = CircularLinkedList;
module.exports.DoublyLinkedList = DoublyLinkedList;
