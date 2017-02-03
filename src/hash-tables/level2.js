'use strict';

/*

Create a function named reverseMerge.
It takes two arguments "keyArr" and "valArr" both of type Array.
It will return a hash that is a merge between the two inputs where
the values in keyArr will be the hashes key and
the values in valArr will be the hashes value.
The catch is that the values from the valArr will be assigned in from last to first.

i.e.
keyArr = [a, b, c];
valArr = [1, 2, 3];

output => {a: 3, b: 2, c: 1}

*/

const reverseMerge = (keyArr, valArr) => {
  let returnObj = {};
  if (keyArr.length === 0 && valArr.length === 0) {
    return returnObj;
  }
  if (keyArr.length === valArr.length) {
    let counter = 1;
    for (let key of keyArr) {
      returnObj[key] = valArr[valArr.length - counter];
      counter++;
    }
  } else if (keyArr.length > valArr.length) {
    keyArr.reverse();
    let counter = 0;
    for (let key of keyArr) {
      if (counter >= valArr.length) {
        returnObj[key] = 42;
      } else {
        returnObj[key] = valArr[counter];
      }
      counter++;
    }
  } else if (keyArr.length < valArr.length) {
    valArr.reverse();
    let counter = 0;
    for (let val of valArr) {
      if (counter >= keyArr.length) {
        if (returnObj.hasOwnProperty('foo')) {
          returnObj['foo'].push(val);
        } else {
          returnObj['foo'] = [val];
        }
      } else {
        returnObj[keyArr[counter]] = val;
      }
      counter++;
    }
  }
  return returnObj;
};

/*

Create a function named mostUsedWord.
It takes a single argument "sentence" of type string.
It will return an object with a single key-value pair.
The key will be the word with the highest occurance in the string.
The value will the the number of occurances of that word in the string.

*/

const mostUsedWord = (sentence) => {
  let splitSentence = sentence.split(' ');
  let wordCount = {};
  for (let word of splitSentence) {
    let lowerWord = word.toLowerCase();
    if (wordCount.hasOwnProperty(lowerWord) === true) {
      wordCount[lowerWord] += 1;
    } else {
      wordCount[lowerWord] = 1;
    }
  }
  let highestCountKey;
  let highestCount;
  for (let word in wordCount) {
    if (!highestCount) {
      highestCount = wordCount[word];
      highestCountKey = word;
    } else {
      if (wordCount[word] > highestCount) {
        highestCount = wordCount[word];
        highestCountKey = word;
      }
    }
  }
  return { [highestCountKey]: highestCount };
};


/*

Write a function, isAnagram.
It takes a two arguments "test" and "original", both of type string.
It returns TRUE if the words are anagrams of one another and FALSE if it is not.

*/

const isAnagram = (test, original) => {
  if (test.length !== original.length) {
    return false;
  }
  let testObj = {};
  let originalObj = {};
  for (let char of test) {
    if (testObj.hasOwnProperty(char)) {
      testObj[char] += 1;
    } else {
      testObj[char] = 1;
    }
  }
  for (let char of original) {
    if (originalObj.hasOwnProperty(char)) {
      originalObj[char] += 1;
    } else {
      originalObj[char] = 1;
    }
  }
  for (let key in testObj) {
    if (testObj[key] !== originalObj[key]) {
      return false;
    }
  }
  return true;
};

module.exports = { reverseMerge, mostUsedWord, isAnagram };
