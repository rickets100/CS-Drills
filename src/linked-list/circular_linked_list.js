'use strict';

/*
  A Circular Linked List is a list where head.prev points to tail and
  tail.next points to head. Complete this linked list with a significantly
  reduced API.
*/

function Node(val) {
  this.next = null;
  this.prev = null;
  this.value = val;
}

function CircularLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

/*
  Add an item to the list -- the new node becomes the tail of the list.
*/
CircularLinkedList.prototype.add = function(val) {
  var node = new Node(val);
  if (this.head === null) {
    node.prev = node;
    node.next = node;
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    node.next = this.head;
    this.head.prev = node;
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
};

/*
  Remove and return the val of the current tail.
*/
CircularLinkedList.prototype.removeLast = function() {
  if (this.length > 1) {
    this.tail.prev = this.head.next;
  } else {
    this.head = null;
    this.tail = null;
  }
  // this.head.prev = null;
  // this.head.next = null;
  this.length--;
};

module.exports = CircularLinkedList;
