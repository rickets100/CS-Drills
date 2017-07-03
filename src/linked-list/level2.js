const toArray = require('./level1').toArray
const count = require('./level1').count

/* Write a function named insertInBack that takes in the following:
- value (a number)
- list (a linked list)

The function returns the linked list with the node inserted at the end.
Example: insertInBack(1 -> 2 -> 3 -> ., 4) produces 1 -> 2 -> 3 -> 4 -> .
*/
// ===== INSERT IN BACK =====
function insertInBack(value, list) {
  let newNode = {
    value: value,
    next: null
  }

  // empty
  if (!list) {
    return newNode
  }

  // not empty
  let finder = list
  while (finder.next != null) {
    finder = finder.next
  }
  finder.next = newNode
  return list
} // function


/* Write a function named removeNodeAtIndex that takes in the following:
- list (a linked list)
- index (a number)

The function returns the linked list with the node at that index removed.
Example: removeNodeAtIndex(1 -> 2 -> 3 -> ., 1) produces 1 -> 3 -> .
*/
// ===== REMOVE AT INDEX =====
function removeNodeAtIndex(list, index) {
  console.log('index is ', index);
  // empty list
  if (!list) {
    return null
  }

  // single item
  if (list.next === null) {
    if (index === 0) {
      return null
    } else {
      return error // index was not === 0
    }
  }

  let counter = 1
  let tracker = list
  let finder = list.next

  // item to be removed is first item and list is >1
  if (tracker === list && counter === index-1) {
    tracker = list.next
    return tracker
  }

  // item to be removed is not first item in list of >1
  while (finder.next != null) {
    if (counter === index) {
      tracker.next = finder.next
      return list
    }
    counter++
    tracker = finder
    finder = finder.next
  } // while

  // is item to be removed the very last item?
  if (counter+1 === index) {
    tracker.next = null
    return list
  } else {
    return error
  }
} // function


/* Write a function named reverse that takes in the following:
- list (a linked list)

The function returns a NEW linked list with the items in reverse order.
Example: 1 -> 2 -> 3 -> . would produce 3 -> 2 -> 1 -> .
*/
// ===== REVERSE =====
function reverse(list) {
  // empty
  if (!list) {
    return null
  }
  let tempArray = toArray(list)
  let counter = count(list) -1
  let tracker = list

  // not empty
  while (tracker.next != null) {
    tracker.value = tempArray[counter]
    counter--
    tracker = tracker.next
  }
  tracker.value = tempArray[counter]
  return list
} // function

module.exports = {
  insertInBack,
  removeNodeAtIndex,
  reverse
};
