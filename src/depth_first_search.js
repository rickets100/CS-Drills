'use strict'

/*

Complete the depth first search algorithm below to pass the tests.

The dfs function takes in the root node, along with a callback function
that will determine if the node is a match. to use isMatch, call it with the nodes data. For example

isMatch(node.data)

This will return true if there is a match, and false if there isn't a match.

If you find the node, then return it. Otherwise return false.

Each node has the following data structure. The left and right keys can be a
object if there is a child in that direction, otherwise it will be undefined.

{
  data: 4,
  left: [object object],
  right: undefined
}
*/
function dfs (node, isMatch) {
  if(!node) return false;
  if(isMatch(node.data)) return node;

  if(node.left) {
    let result = dfs(node.left, isMatch);
    if(result) return result;
  }
  if(node.right) {
    let result = dfs(node.right, isMatch);
    if(result) return result;
  }

  return false;
}

module.exports = dfs;
