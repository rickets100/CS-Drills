'use strict';

/*
CHALLENGE:
Write a function that takes in a string in binary
And returns a number representing that number in decimal

Usage: binaryToDecimal('010') => 2

You must not use `toString` or `parseInt` or any other
built-in method in javascript that could aid in the conversion.
*/

let sampleString = "0010110"

function powerOfTwo(num) {
  let acc = 0
  // "to the power of 0" is a special case
  if (num===0) {
    return num*1
  }

  // for all other cases...
  for (let j=0; j<=num; j++) {
    acc = acc + (2 * num)
  }
  return acc
} // function

module.exports = function(str) {
  let returnNum = 0
  let currentDigit = 0
  let temp = 0
  let length = str.length

  for (let i=length; i>=0; i--) {
    let currentChar = str.charAt(length-(temp+1))
    let currentDigit = (currentChar || 0) // force type to integer

    returnNum += (currentDigit * (powerOfTwo(currentDigit)))
    temp++
    str = str.slice(0, -1)
  }
  return returnNum
}

// ===== BINARY TO DECIMAL =====
function binaryToDecimal(str) {
  let returnNum = 0
  let currentDigit = 0
  let temp = 0
  let length = str.length

  for (let i=length; i>=0; i--) {
    let currentChar = str.charAt(length-(temp+1))
    let currentDigit = (currentChar || 0) // force type to integer

    returnNum += (currentDigit * (powerOfTwo(currentDigit)))
    temp++
    str = str.slice(0, -1)
  }
  return returnNum
} // function
