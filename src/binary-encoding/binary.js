'use strict';

/*

Write a function that takes in a string in binary
And returns a number representing that number in decimal

Usage:

binaryToDecimal('010') => 2

You must not use `toString` or `parseInt` or any other
built-in method in javascript that could aid in the conversion.

*/
let sampleString = "0010110"
// 0 + 2 + 4 + 0 +16 + 0 + 0 (22)
// 0*2^0 + 1*2^1 + 1*2^2...

function powerOfTwo(num) {
  console.log('in powerOfTwo, num is ', num);
  let acc = 0
  // "to the power of 0" is a special case
  if (num===0) {
    return num*1
  }

  // for all other cases...
  for (let j=0; j<=num; j++) {
    console.log("got here, j is ", j, "acc is ", acc)
    acc = acc + 2*num
    console.log("now acc is ", acc)
  }
  return acc
}

module.exports = function(str) {

}


function binaryToDecimal(str) {
  let returnNum = 0
  let currentDigit = 0
  let temp = 0
  let length = str.length
  console.log('length is ', length);
  for (let i=length; i>=0; i--) {
    let currentChar = str.charAt(length-(temp+1))
    let currentDigit = (currentChar || 0) // force type to integer
    console.log('str is ', str, 'at the top of the loop')
    console.log('i is ', i);
    console.log('currentChar is ', currentChar)
    console.log('currentDigit is ', currentDigit)
    console.log('temp is ', temp)
    returnNum = returnNum + (currentDigit * (powerOfTwo(currentDigit)))
    temp++
    str = str.slice(0, -1)
    console.log('str is now ', str);
    console.log("returnNum is now ", returnNum, '\n');
  }
  return returnNum
} // function

binaryToDecimal(sampleString)
