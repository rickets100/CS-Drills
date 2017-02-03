// Write a function named toArray that takes in the following:
//   tree (a Binary Search Tree)
// The function returns an array of all the elements on the tree. The order is
// maintained.
//
// Example:
//    2
//   / \       produces [1, 2, 7]
//  1   7
//
//    2
//   / \       produces [1, 2, 4, 7]
//  1   4
//     / \
//    *   7
function toArray(tree) {
  if (tree === null) {
    return [];
  }

  return toArray(tree.left).concat([tree.value], toArray(tree.right));
}

// Write a function named findValueInTree that takes in the following:
//   tree (a Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
//
// Example:
//    1
//   /|\       with value 1, produces true
//  2 4 7      with value 3, produces false
function findValueInTree(tree, value) {
  if (tree.value === value) {
    return true;
  }

  for (let child of tree.children) {
    if (child.value === value) {
      return true;
    } else {
      findValueInTree(child, value);
    }
  }

  return false;
}

// Write a function named findValueInBinTree that takes in the following:
//   tree (a Binary Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
//
// Example:
//    2
//   / \       with value 1, produces true
//  1   7      with value 3, produces false
function findValueInBinTree(tree, value) {
  if (tree.value === value) {
    return true;
  }

  if (tree.left !== null) {
    if (tree.left.value === value) {
      return true;
    } else {
      findValueInBinTree(tree.left, value);
    }
  }

  if (tree.right !== null) {
    if (tree.right.value === value) {
      return true;
    } else {
      findValueInBinTree(tree.right, value);
    }
  }

  return false;
}

// Write a function named findValueInBinSearchTree that takes in the following:
//   tree (a Binary Search Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
// NOTE: The same solution as findValueInBinTree would work, but we can improve
// the efficiency of these trees.
//
// Example:
//    2
//   / \       with value 1, produces true
//  1   7      with value 3, produces false
function findValueInBinSearchTree(tree, value) {
  if (tree.value === value) {
    return true;
  }

  if (tree.left !== null) {
    if (tree.left.value === value) {
      return true;
    } else {
      findValueInBinTree(tree.left, value);
    }
  }

  if (tree.right !== null) {
    if (tree.right.value === value) {
      return true;
    } else {
      findValueInBinTree(tree.right, value);
    }
  }

  return false;
}

// Write a function named insertInBinSearchTree that takes in the following:
//   tree (a Binary Search Tree)
//   value (number)
// The function returns a NEW Binary Search Tree with the value inserted. The
// tree does not need to be rebalanced. The position of each node will remain
// the same.
// Example:
//    2                                   2
//   / \       with value 5, produces    / \
//  1   7                               1   7
//                                         / \
//                                        5   *
function insertValueInBinSearchTree(tree, value) {
  if (tree === null) {
    return {
      value,
      left: null,
      right: null
    };
  }

  let currentNode = tree;
  let inserted = false;

  while (inserted === false) {
    if (!currentNode.left && !currentNode.right) {
      if (value > currentNode.value) {
        currentNode.right = {
          value,
          left: null,
          right: null
        };
        inserted = true;
      } else {
        currentNode.left = {
          value,
          left: null,
          right: null
        };
        inserted = true;
      }
    } else if (!currentNode.left) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode.left = {
          value,
          left: null,
          right: null
        };
        inserted = true;
      }
    } else if (!currentNode.right) {
      if (value > currentNode.value) {
        currentNode.right = {
          value,
          left: null,
          right: null
        };
        inserted = true;
      } else {
        currentNode = currentNode.left;
      }
    } else if (currentNode.left < value) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }

  return tree;
}

module.exports = {
  toArray,
  findValueInTree,
  findValueInBinTree,
  findValueInBinSearchTree,
  insertValueInBinSearchTree
};
