var file = require('../../src/linked-list/practice')
var LinkedList = file.LinkedList;
var Node = file.Node;
var DoublyLinkedList = file.DoublyLinkedList;
var CircularLinkedList = file.CircularLinkedList;
const expect = require("chai").expect;

var linkedList;
var node;

describe('linked list', function() {
  beforeEach(function() {
    linkedList = new LinkedList();
  });

  describe('add', function() {
    it ('should update the length', function() {
      expect(linkedList.length).to.equal(0);
      linkedList.add('First!');
      expect(linkedList.length).to.equal(1);
    });

    it ('should make head point to the first node, if there is no head', function() {
      expect(linkedList.head).to.equal(null);
      linkedList.add('First!');
      expect(linkedList.head.value).to.equal('First!');
    });

    it ('should make tail point to the last node, if there is no tail', function() {
      expect(linkedList.tail).to.equal(null);
      linkedList.add('First!');
      expect(linkedList.tail.value).to.equal('First!');
    });

    it ('should update the next property on the current tail when adding new nodes', function() {
      linkedList.add('First!');
      expect(linkedList.head.next).to.equal(null);
      linkedList.add('Last!');
      expect(linkedList.head.next.value).to.equal('Last!');
    });
  });

  describe('removeLast', function() {
    beforeEach(function() {
      linkedList.add('First!');
      node = linkedList.head;
    });

    it ('should update the length', function() {
      expect(linkedList.length).to.equal(1);
      linkedList.removeLast();
      expect(linkedList.length).to.equal(0);
    });

    it ('should null head, if this was the last node', function() {
      linkedList.removeLast();
      expect(linkedList.head).to.equal(null);
    });

    it ('should null tail, if this is the last node', function() {
      linkedList.removeLast();
      expect(linkedList.tail).to.equal(null);
    });

    it ('should null the next value on the previous element when removing nodes', function() {
      linkedList.add('Last!');
      expect(node.next.value).to.equal('Last!');
      linkedList.removeLast();
      expect(node.next).to.equal(null);
    });
  });
});


describe('doubly linked list', function() {
  beforeEach(function() {
    linkedList = new DoublyLinkedList();
  });

  describe('add', function() {
    it ('should update the length', function() {
      expect(linkedList.length).to.equal(0);
      linkedList.add('First!');
      expect(linkedList.length).to.equal(1);
    });

    it ('should make head point to the first node, if there is no head', function() {
      expect(linkedList.head).to.equal(null);
      linkedList.add('First!');
      expect(linkedList.head.value).to.equal('First!');
    });

    it ('should make tail point to the last node, if there is no tail', function() {
      expect(linkedList.tail).to.equal(null);
      linkedList.add('First!');
      expect(linkedList.tail.value).to.equal('First!');
    });

    it ('should update the next property on the current tail when adding new nodes', function() {
      linkedList.add('First!');
      expect(linkedList.head.next).to.equal(null);
      linkedList.add('Last!');
      expect(linkedList.head.next.value).to.equal('Last!');
    });

    it ('should set the prev property when adding a new node', function() {
      linkedList.add('First!');
      linkedList.add('Last!');
      expect(linkedList.tail.prev.value).to.equal('First!');
    });
  });

  describe('removeLast', function() {
    beforeEach(function() {
      linkedList.add('First!');
      node = linkedList.head;
    });

    it ('should update the length', function() {
      expect(linkedList.length).to.equal(1);
      linkedList.removeLast();
      expect(linkedList.length).to.equal(0);
    });

    it ('should null head, if this was the last node', function() {
      linkedList.removeLast();
      expect(linkedList.head).to.equal(null);
    });

    it ('should null tail, if this is the last node', function() {
      linkedList.removeLast();
      expect(linkedList.tail).to.equal(null);
    });

    it ('should null the next value on the previous element when removing nodes', function() {
      linkedList.add('Last!');
      expect(node.next.value).to.equal('Last!');
      linkedList.removeLast();
      expect(node.next).to.equal(null);
    });

    it ('should null the prev value on the new head when removing nodes', function() {
      linkedList.add('Last!');
      expect(linkedList.tail.prev.value).to.equal('First!');
      linkedList.removeLast();
      expect(linkedList.tail.prev).to.equal(null);
    });
  });
});

describe('circular linked list', function() {
  beforeEach(function() {
    linkedList = new CircularLinkedList();
  });

  describe('add', function() {
    it ('should update the length', function() {
      expect(linkedList.length).to.equal(0);
      linkedList.add('First!');
      expect(linkedList.length).to.equal(1);
    });

    it ('should make head point to the first node, if there is no head', function() {
      expect(linkedList.head).to.equal(null);
      linkedList.add('First!');
      expect(linkedList.head.value).to.equal('First!');
    });

    it ('should make tail point to the last node, if there is no tail', function() {
      expect(linkedList.tail).to.equal(null);
      linkedList.add('First!');
      expect(linkedList.tail.value).to.equal('First!');
    });

    it ('should update the next property on the current tail when adding new nodes', function() {
      linkedList.add('First!');
      expect(linkedList.head.next).to.equal(linkedList.head);
      linkedList.add('Last!');
      expect(linkedList.head.next.value).to.equal('Last!');
    });

    it ('should point next on new items to head', function() {
      linkedList.add('First!');
      linkedList.add('Last!');
      expect(linkedList.tail.next).to.equal(linkedList.head);
    });
  });

  describe('removeLast', function() {
    beforeEach(function() {
      linkedList.add('First!');
      node = linkedList.head;
    });

    it ('should update the length', function() {
      expect(linkedList.length).to.equal(1);
      linkedList.removeLast();
      expect(linkedList.length).to.equal(0);
    });

    it ('should null head, if this was the last node', function() {
      linkedList.removeLast();
      expect(linkedList.head).to.equal(null);
    });

    it ('should null tail, if this is the last node', function() {
      linkedList.removeLast();
      expect(linkedList.tail).to.equal(null);
    });

    it ('should set the next value on the last remaining node to itself', function() {
      linkedList.add('Last!');
      expect(node.next.value).to.equal('Last!');
      linkedList.removeLast();
      expect(node.next).to.equal(node);
    });
  });
});
