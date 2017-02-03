'use strict';

function HashTable(size, prime) {
  size = size || 59;
  prime = prime || 122611;
  this.arr = Array(size);
  this.prime = prime;
}

HashTable.prototype.__hashFunction = function(key) {
  var size = this.arr.length;

  if (typeof key === 'function') key = key.toString();

  if (typeof key === 'object' && Array.isArray(key)) {
    key = key.reduce(function(acc, el) { return acc + String(el) + ',';}, '[]');
  }

  if (typeof key === 'object' && !Array.isArray(key)) {
    key = '{}' + Object.keys(key).join(',');
  }

  if (typeof key === 'number' && isNaN(key)) key = 'NaN';
  if (typeof key === 'number' && !isFinite(key)) key = 'Infinity';

  if (typeof key === 'string') {
    key = key.split('').reduce(function(acc, el) {
      return acc + el.charCodeAt(0);
    }, 0);
  }

  if (typeof key === 'number') return (key * this.prime) % size;
};

HashTable.prototype.set = function(key, value) {
  var hashKey = this.__hashFunction(key);
  this.arr[hashKey] = this.arr[hashKey] || {};
  this.arr[hashKey][key] = value;
};

HashTable.prototype.get = function(key) {
  var hashKey = this.__hashFunction(key);
  return (this.arr[hashKey] || {})[key];
};

HashTable.prototype.exists = function(key) {
  return this.get(key) !== undefined;
};

HashTable.prototype.remove = function(key) {

};

module.exports = HashTable;
