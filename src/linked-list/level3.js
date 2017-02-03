// Write a function named merge that takes in the following as arguments:
//   list1 - a linked list in sorted order
//   list2 - a linked list in sorted order
// The function returns a NEW linked list that is in sorted order.
// Example:
//    merge(1 -> 3 -> 5 -> ., 2 -> 4 -> 6 -> .) produces
//       1 -> 2 -> 3 -> 4 -> 5 -> 6 -> .
function merge(list1, list2) {
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  } else if (list1 === null && list2 === null) {
    return null;
  }

  let list1Values = [];
  let list2Values = [];

  while (list1 !== null) {
    list1Values.push(list1.value);
    list1 = list1.next;
  }

  while (list2 !== null) {
    list2Values.push(list2.value);
    list2 = list2.next;
  }

  let allValues = (list1Values.concat(list2Values)).sort();

  const buildList = function(arr) {
    if (arr.length === 0) {
      return null;
    }

    return {
      value: arr.shift(),
      next: buildList(arr)
    };
  };

  return buildList(allValues);
}

// Write a function named map, that takes in the following as arguments:
//   list - A linked list
//   fcn - a function that takes in the value of each node as an argument.
//         it returns a new value.
// The function returns a NEW linked list, where each node's value is the same as the function applied on the original linked list.
// Example:
//    map(1 -> 2 -> 3 -> ., (num) => num * 2) produces 2 -> 4 -> 6 -> .
function map(list, fcn) {
  if (list === null) {
    return null;
  }
  let newList = list;

  while (list !== null) {
    list.value = fcn(list.value);
    list = list.next;
  }

  return newList;
}

// Write a function named filter, that takes in the following as arguments:
//   list - A linked list
//   fcn - a function that takes in the value of each node as an argument and
//         returns a boolean.
// The function returns a NEW linked list, where each node's value is the same
// as the function applied on the original linked list.
// Example:
//    filter(1 -> 2 -> 3 -> 4 -> ., (num) => num % 2 === 0) produces
//        2 -> 4 -> 6 -> .
function filter(list, fcn) {
  if (list === null) {
    return null;
  }

  let valuesArray = [];

  while (list !== null) {
    if (fcn(list.value)) {
      valuesArray.push(list.value);
    }
    list = list.next;
  }

  const buildList = function(arr) {
    if (arr.length === 0) {
      return null;
    }

    return {
      value: arr.shift(),
      next: buildList(arr)
    };
  };

  return buildList(valuesArray);
}

module.exports = {
  merge,
  map,
  filter
};
