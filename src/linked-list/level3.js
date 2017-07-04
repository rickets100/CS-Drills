const count = require('./level1').count
const insertInBack = require('./level2').insertInBack

/* Write a function named merge that takes in the following as arguments:
- list1 - a linked list in sorted order
- list2 - a linked list in sorted order
The function returns a NEW linked list that is in sorted order.

Example:
merge(1 -> 3 -> 5 -> ., 2 -> 4 -> 6 -> .) produces
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> .
*/
// ===== MERGE =====
function merge(list1, list2) {

  // both empty
  if (!list1 && !list2) {
    return null
  }

  // one is empty
  if (!list1) {
    return list2
  }
  if (!list2) {
    return list1
  }

  // neither is empty
  let tracker1 = list1
  let tracker2 = list2
  let newList = null

  while ((tracker1 != null) && (tracker2 != null)) {
    if (tracker1.value <= tracker2.value) {
      newList = insertInBack(tracker1.value, newList)
      tracker1 = tracker1.next
    } else {
      newList = insertInBack(tracker2.value, newList)
      tracker2 = tracker2.next
    }
  }

  // still some items remaining in list2
  if (tracker1 === null) {
    while (tracker2 != null) {
      insertInBack(tracker2.value, newList)
      tracker2 = tracker2.next
    }
  }

  // still some items remaining in list1
  if (tracker2 === null ) {
    while (tracker1 != null) {
      insertInBack(tracker1.value, newList)
      trackr1 = tracker1.next
    }
  }
  return newList
}

/* Write a function named map, that takes in the following as arguments:
- list - A linked list
- fcn - a function that takes in the value of each node as an argument.

it returns a new value.

The function returns a NEW linked list, where each node's value is the same as the function applied on the original linked list.
Example:
map(1 -> 2 -> 3 -> ., (num) => num * 2) produces 2 -> 4 -> 6 -> .
*/
// ===== MAP =====
function map(list, fcn) {
  let tracker = list
  let newList = null

  // empty
  if (!list) {
    return null
  }

  // not empty
  while (tracker) {
    newList = insertInBack(fcn(tracker.value), newList)
    tracker = tracker.next
  }
  return newList
} // function


/* Write a function named filter, that takes in the following as arguments:
- list - A linked list
- fcn - a function that takes in the value of each node as an argument and returns a boolean.

The function returns a NEW linked list, where each node's value is the same as the function applied on the original linked list.

Example:
filter(1 -> 2 -> 3 -> 4 -> ., (num) => num % 2 === 0) produces 2 -> 4 -> 6 -> .
*/
// ===== FILTER =====
function filter(list, fcn) {
  let tracker = list
  let newList = null

  // empty
  if (!list) {
    return null
  }

  // not empty
  while (tracker) {
    if (fcn(tracker.value)) {
      newList = insertInBack(tracker.value, newList)
    }
    tracker = tracker.next
  }
  return newList
}

module.exports = {
  merge,
  map,
  filter
}
