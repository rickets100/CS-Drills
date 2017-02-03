'use strict';

/*

Write a function that takes in a string in binary
And returns a number representing that number in decimal

Usage:

binaryToDecimal("010") => 2

You must not use `toString` or `parseInt` or any other
built-in method in javascript that could aid in the conversion.

*/
module.exports = function(str) {
  let result = 0, multiplier = 1;
  for (let i = str.length; i--;) {
    if (str[i] === '1') result += multiplier;
    multiplier = multiplier * 2;
  }
  return result;
};
