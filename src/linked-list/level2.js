// Write a function named insertInBack that takes in the following:
//   value (a number)
//   list (a linked list)
// The function returns the linked list with the node inserted at the end.
// Example:
//    insertInBack(1 -> 2 -> 3 -> ., 4) produces 1 -> 2 -> 3 -> 4 -> .
function insertInBack(value, list) {
  if (list === null) {
    return {
      value,
      next: null
    };
  }

  let listStart = list;
  while (list.next !== null) {
    list = list.next;
  }

  list.next = {
    value,
    next: null
  };

  return listStart;
}

// Write a function named removeNodeAtIndex that takes in the following:
//   list (a linked list)
//   index (a number)
// The function returns the linked list with the node at that index removed.
// Example:
//  removeNodeAtIndex(1 -> 2 -> 3 -> ., 1) produces 1 -> 3 -> .
function removeNodeAtIndex(list, index) {
  if (list === null) {
    return list;
  }
  let listStart = list;
  let counter = 0;
  let prev;

  while (counter !== index) {
    prev = list;
    list = list.next;
    counter++;
  }

  prev.next = list.next;

  return listStart;
}

// Write a function named reverse that takes in the following:
//   list (a linked list)
// The function returns a NEW linked list with the items in reverse order.
// Example:
//   1 -> 2 -> 3 -> . would produce 3 -> 2 -> 1 -> .
function reverse(list) {
  if (list === null) {
    return null;
  }

  function count(list) {
    if (list === null) {
      return 0;
    }

    return 1 + count(list.next);
  }

  let listLength = count(list);
  let returnList = {};
  let counter = listLength;
  let prev;

  while (counter > 0) {
    let temp = list;
    let tempCounter = counter;
    while (tempCounter > 1) {
      temp = temp.next;
      tempCounter--;
    }

    if (counter === listLength) {
      returnList = temp;
      returnList.next = null;
    }
    else if (counter === listLength - 1) {
      returnList.next = temp;
      prev = temp;
      prev.next = null;
    } else {
      prev.next = temp;
      prev = temp;
      prev.next = null;
    }

    counter--;
  }

  return returnList;
}

module.exports = {
  insertInBack,
  removeNodeAtIndex,
  reverse
};
