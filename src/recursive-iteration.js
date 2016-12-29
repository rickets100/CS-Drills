'use strict'

exports.max = function max(array) {
  if (array.length < 2) return array[0];
  return Math.max(array[0], max(array.slice(1)))
}

exports.min = function min(array) {
  if (array.length < 2) return array[0];
  return Math.min(array[0], min(array.slice(1)))
}

exports.filter = function filter(array, fn) {
  if (!array.length) { return [] }
  const result = []
  if (fn(array[0])) result.push(array[0])
  return result.concat(filter(array.slice(1), fn))
}

exports.reject = function reject(array, fn) {
  if (!array.length) { return [] }
  const result = []
  if (!fn(array[0])) result.push(array[0])
  return result.concat(reject(array.slice(1), fn))
}

exports.every = function every(array, fn) {
  if (!array.length) return true
  return fn(array[0]) && every(array.slice(1), fn)
}

exports.some = function some(array, fn) {
  if (!array.length) return false
  return fn(array[0]) || some(array.slice(1), fn)
}

exports.none = function none(array, fn) {
  if (!array.length) return true
  return !fn(array[0]) && none(array.slice(1), fn)
}

exports.map = function map(array, fn) {
  if (!array.length) return [];
  return [fn(array[0])].concat(map(array.slice(1), fn))
}

exports.join = function join(array, delimiter) {
  if (array.length === 1) return array[0]
  if (array.length === 0) return ''
  return `${array[0]}${delimiter}${join(array.slice(1), delimiter)}`
}

exports.split = function split(string, delimiter) {
  if (string.length === 0) return []
  let index = string.indexOf(delimiter)
  if (~index) {
    return [string.substring(0,index)].concat(split(string.substring(index + 1, string.length), delimiter))
  } else {
    return [string];
  }
}

exports.reduce = function reduce(array, fn, initialValue) {
  if (!array.length) return initialValue;
  const previous = fn(initialValue, array[0])
  return reduce(array.slice(1), fn, previous)
}

exports.indexOf = function indexOf(array, value, position = 0) {
  if (!array.length) {
    return -1;
  } else if (array[0] === value) {
    return position
  } else {
    return indexOf(array.slice(1), value, position + 1)
  }
}

exports.leftPad = function leftPad(string, padNum, delimiter) {
  if (string.length >= padNum) return string
  return leftPad(delimiter + string, padNum, delimiter)
}

exports.flatten = function flatten(array) {
  if (!array.length) return []
  const current = Array.isArray(array[0]) ? flatten(array[0]) : [array[0]]
  return current.concat(flatten(array.slice(1)))
}
