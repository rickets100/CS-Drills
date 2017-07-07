'use strict';

const LANG_LIST = {
  english: 'Welcome',
  czech: 'Vitejte',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  french: 'Bienvenue',
  german: 'Willkommen',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  swedish: 'Valkommen',
  welsh: 'Croeso'
};

// ===== GREET =====
const greet = (language) => {
  language = language.toLowerCase()
  if (LANG_LIST[language] != undefined) {
    return LANG_LIST[language] + ' a Miami.'
  }
  return LANG_LIST.english + ' a Miami.'
}

/*
Create a function named removeDupes.
It takes a single argument 'numArr' of type Array.
It will return a hash who's keys are the value of the item in the array.
The hash's value will be the item value's index in the array.
If there are more than one occurance, the index set to the hash should be of the last occurance.

i.e. [1, 'z', 'bob', true, 42, 'bob'] => { '1': 0, 'z': 1, 'bob': '5', 'true': 3, '42': 4 }
*/

// ===== REMOVEDUPES =====
const removeDupes = (numArr) => {
  if (numArr.length) {
    let size = numArr.length
    let hashTable = {}
    for (let i = 0; i < size; i++) {
      hashTable[numArr[i]] = i
    }
    return hashTable
  }
  return {}
}

/*

Create a function named onlyOdds.
It takes a single argument mixedHash of type Object.
It will return a copy of mixedHash without key-value pairs values that are even numbers.

i.e. { 'foo': 6, 'bar': 3, 'baz': 'bob', 13: 13 } => { 'bar': 3, '13': 13 }

*/

// ===== ONLYODDS =====
const onlyOdds = (mixedHash) => {

}

/*

Create a function named charCount.
It takes a single argument 'word' of type String.
It will return a hash who's keys represent the characters in the word
and values represent the occurances of that character.

i.e. 'hello' => { h: 1, e: 1, l: 2, o: 1 }
*/

const charCount = (word) => {

};

module.exports = { greet, removeDupes, onlyOdds, charCount };

/*

Will Smith is back in the music game and his PR team is telling him he should make his former pop
hit, 'Miami', multi-lingual. Below is a list of languages his team want him to include. Will is a busy
guy so he has asked you to help him out.

Create a funtion named greet()
It takes a single argument 'language'
It will return 'Welcome to Miami.' where 'Welcome' will be in the language specified.

i.e  when the language is latvian, the fn will return 'Gaidits to Miami.'

*/
