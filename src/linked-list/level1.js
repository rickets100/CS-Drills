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


// Write a function named sum that takes in one argument:
//  list - a Linked List
// The function returns the sum of all of the elements in the list.

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
  console.log(sum)
  return sum
} // function

// Write a function named getValueAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the value of the item at the index. If an invalid index
// is used, it will throw an error.
// Example:
//  getValueAtIndex(1 -> 2 -> 3 -> ., 2) produces 3
//  getValueAtIndex(1 -> 2 -> 3 -> ., 0) produces 1
//  getValueAtIndex(1 -> 2 -> 3 -> ., 4) throws an error
// ===== GET VALUE AT INDEX =====
function getValueAtIndex(list, index) {
  console.log('index is ', index)
  console.log('list is ', list)
  let count = 0
  if (list && (index >-1)) {

    // is the first item a match?
    let finder = list
    if (count === index) {
      return finder.value
    }

    // not the first item
    while (finder.next != null) {
      console.log('was not the first item')
      count++
      finder = finder.next
      if (count === index) {
        console.log(count, ' = ', index)
        console.log('finder.value ', finder.value);
        return finder.value
      }
    } // while
  }
  console.log('error: index not found')
  return error
} // function

// Write a function toArray that takes in one argument:
//   list (a linked list)
// The function returns an array of the values in the linked list.
// Example:
//   1 -> 2 -> 3 -> .  would produce [1, 2, 3]
// ===== LIST TO ARRAY =====
function toArray(list) {

}

module.exports = {
  count,
  insertInFront,
  sum,
  getValueAtIndex,
  toArray
};
