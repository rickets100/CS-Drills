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

// Write a function named removeNodeAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the linked list with the node at that index removed.
// Example:
//  removeNodeAtIndex(1 -> 2 -> 3 -> ., 1) produces 1 -> 3 -> .

// ===== REMOVE AT INDEX =====
function removeNodeAtIndex(list, index) {

}

// Write a function named reverse that takes in the following:
//   list (a linked list)
// The function returns a NEW linked list with the items in reverse order.
// Example:
//   1 -> 2 -> 3 -> . would produce 3 -> 2 -> 1 -> .
function reverse(list) {

}

module.exports = {
  insertInBack,
  removeNodeAtIndex,
  reverse
};
