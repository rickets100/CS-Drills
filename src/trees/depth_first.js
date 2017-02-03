/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, pre-order strategy.
*/
module.exports.preOrder = function(root) {
  const result = [];

  const search = function(node) {
    result.push(node.data);

    if (node.left) {
      search(node.left);
    }

    if (node.right) {
      search(node.right);
    }
  };

  search(root);

  return result;
};

/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, in-order strategy.
*/
module.exports.inOrder = function(root) {
  const result = [];

  const search = function(node) {
    if (node.left) {
      search(node.left);
    }

    result.push(node.data);

    if (node.right) {
      search(node.right);
    }
  };

  search(root);

  return result;
};

/*
  Given the root of the following tree...

       A
      /\
    B   C
   /\
  D E

  Write a recursive algorithm that returns its values as an array, ordered using a depth first search, post-order strategy.
*/
module.exports.postOrder = function(root) {
  const result = [];

  const search = function(node) {
    if (node.left) {
      search(node.left);
    }

    if (node.right) {
      search(node.right);
    }

    result.push(node.data);
  };

  search(root);

  return result;
};
