'use strict';

function HashTable(size, prime) {
  size = size || 59
  prime = prime || 122611
  this.arr = Array(size)
  this.prime = prime
}

function strToCharCode (str) {
  let newStr = str.split('').reduce(function(acc, el) {
    return acc + el.charCodeAt(0)
  }, 0)
  return newStr
}
/*
  Given a key for the hashmap, compute the index to store our value. Specifically, this hash function will reduce a key to an integer, then multiplies it by this.prime, and finally returns:
  (numKey * this.prime) % this.arr.length.

  For non-number keys this function transforms the key into a string, then computes the sum of the char-codes to transform that string into an integer. See test file function strToCharCode for that process.

  @param key - a value to be used as a key for our HashTable.
  @returns {number} - an integer value to be used as an index value for this.arr
*/

HashTable.prototype.__hashFunction = function(key) {
  console.log('hey');
  if (typeof key === 'string') {
    key = strToCharCode(key)
    let numKey = (key * this.prime) % this.arr.length
    return numKey
  }

  if (typeof key === 'function') {
    key = strToCharCode(key.toString())
    let numKey = (key * this.prime) % this.arr.length
    return numKey
  }
  // console.log('incoming type : ', typeof key)
  // console.log('incoming key ', key);

  if (typeof key === 'object') {
      key = JSON.stringify(key)
      key = strToCharCode(key)
      let numKey = (key * this.prime) % this.arr.length
      return numKey
  }

  if ((isNaN(key))) {
    key = strToCharCode('NaN')
    let numKey = (key * this.prime) % this.arr.length
    return numKey
  } else if (key === Infinity) {
    key = strToCharCode('Infinity')
    let numKey = (key * this.prime) % this.arr.length
    return numKey
  } else if ((typeof key === 'number') && !(isNaN(key)) && (key != Infinity)) {
    console.log('should get here');
    let numKey = (key * this.prime) % this.arr.length
    return numKey
  }
  return (((numKey * this.prime) % this.arr.length))
} // function



/*
  Given a key value pair, store it in the HashTable.

  @param key - a value to be used as a key for our HashTable.
  @param value - the data to be stored at the location for key.

  @returns undefined
*/
HashTable.prototype.set = function(key, value) {
  console.log('In SET function, value = ', value)
  console.log('...and key is ', key)
  key = this.__hashFunction(key)
  this[key] = value
  console.log('hashed key = ', key)
  console.log('this[key] ', this[key]);
  console.log('this: ', this);
}

/*
  Given a key, return the value associated with that key or undefined if that key
  does not exist in the HashTable.

  @param key - a value to be used as a key for our HashTable.

  @returns - the value associated with key, or undefined.
*/
HashTable.prototype.get = function(key) {
  console.log('In GET function, key = ', key)

};

/*
  Given a key, return true if that key has a value associated with it in our
  HashTable, false otherwise.

  @param key - a value to be used as a key for our hash table.

  @returns true if the key has a value in our HashTable, false otherwise.
*/
HashTable.prototype.exists = function(key) {
  console.log('-----\n in the exists function');
  if (key) {
    return true
  } else {
    return false
  }
}

/*
  Remove a value associated with a specific key from our HashTable.
  If a value was removed, return true
  if the value did not exist in the first place return false.

  @param key - a value to be used as a key for our hash table.

  @returns true if a value was removed, false otherwise.
*/
HashTable.prototype.remove = function(key) {

}

module.exports = HashTable;
