// ===== COUNT NODES =====
function count(list) {
  let count = 0
  if (list) {
    count++
    let finder = list
    while (finder.next != null) {
      count++
      finder = finder.next
    }
  }
  return count
} // function


// ===== INSERT IN FRONT =====
function insertInFront(value, list) {
  let newNode = {
    value: value,
    next: list
  }

  // empty
  if (!list) {
    return newNode
  }

  // list is not empty
  newNode.next = list
  return newNode
} // function


// ===== SUM THE VALUES =====
function sum(list) {
  let sum = 0
  if (list) {
    let finder = list
    while (finder.next != null) {
      sum += finder.value
      finder = finder.next
    }
    sum += finder.value
  }
  return sum
} // function


// ===== GET VALUE AT INDEX =====
function getValueAtIndex(list, index) {
  let count = 0
  if (list && (index >-1)) {

    // is the first item a match?
    let finder = list
    if (count === index) {
      return finder.value
    }

    // not the first item
    while (finder.next != null) {
      count++
      finder = finder.next
      if (count === index) {
        return finder.value
      }
    }
  }
  return error
} // function


// ===== LIST TO ARRAY =====
function toArray(list) {
  let array = []
  let length = count(list.head)
  let index = 0
  if (list) {
    let finder = list.head
    while (index < length) {
      array.push(finder.val)
      index++
      finder = finder.next
    }
  }
  return array
} // function

module.exports = {
  count,
  insertInFront,
  sum,
  getValueAtIndex,
  toArray
};

/* Write a function named count that takes in one argument: list - a Linked List

The function returns the number of elements in the list.
*/

/* Write a function named insertInFront that takes in one argument:
- value (a number)
- list  (a linked list)
The function returns the same linked list with the value inserted in front.
Example: insertInFront(1 -> 2 -> 3 -> ., 4) produces 4 -> 1 -> 2 -> 3 -> .
*/

/* Write a function named sum that takes in one argument:
- list - a Linked List

The function returns the sum of all of the elements in the list.
*/

/* Write a function named getValueAtIndex that takes in the following:
- list (a linked list)
- index (a number)
The function returns the value of the item at the index. If an invalid index is used, it will throw an error.

Example:
getValueAtIndex(1 -> 2 -> 3 -> ., 2) produces 3
getValueAtIndex(1 -> 2 -> 3 -> ., 0) produces 1
getValueAtIndex(1 -> 2 -> 3 -> ., 4) throws an error
*/

/* Write a function toArray that takes in one argument: list (a linked list)

The function returns an array of the values in the linked list.
Example: 1 -> 2 -> 3 -> .  would produce [1, 2, 3]
*/
