// Write a function named count that takes in one argument:
//  list - a Linked List
// The function returns the number of elements in the list.

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
  console.log(count);
  return count
} // function

// Write a function named insertInFront that takes in one argument:
//   value (a number)
//   list  (a linked list)
// The function returns the same linked list with the value inserted in front.
// Example:
//    insertInFront(1 -> 2 -> 3 -> ., 4) produces 4 -> 1 -> 2 -> 3 -> .

// ===== INSERT IN FRONT =====
function insertInFront(value, list) {
  let newNode = {
    value: value,
    next: null
  }

  // empty
  if (!list) {
    console.log('got here, newNode is ', newNode);
    return newNode
  }

  // list is not empty

} // function


// ===== SUM THE VALUES =====
// Write a function named sum that takes in one argument:
//  list - a Linked List
// The function returns the sum of all of the elements in the list.
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
  console.log(sum)
  return sum
}

// Write a function named getValueAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the value of the item at the index. If an invalid index
// is used, it will throw an error.
// Example:
//  getValueAtIndex(1 -> 2 -> 3 -> ., 2) produces 3
//  getValueAtIndex(1 -> 2 -> 3 -> ., 0) produces 1
//  getValueAtIndex(1 -> 2 -> 3 -> ., 4) throws an error
function getValueAtIndex(list, index) {

}

// Write a function toArray that takes in one argument:
//   list (a linked list)
// The function returns an array of the values in the linked list.
// Example:
//   1 -> 2 -> 3 -> .  would produce [1, 2, 3]
function toArray(list) {

}

module.exports = {
  count,
  insertInFront,
  sum,
  getValueAtIndex,
  toArray
};
