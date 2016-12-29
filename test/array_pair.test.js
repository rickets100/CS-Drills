'use strict'

var expect = require('chai').expect;
var arrayPairSum = require('../src/array_pair');

describe('arrayPairSum()', () => {
  it('should return pairs that equal the value', () => {
    expect(arrayPairSum(10, [3, 4, 5, 6, 7])).to.eql([[4, 6], [3, 7]]);
    expect(arrayPairSum(10, [3, 5, 6, 8])).to.eql([]);
  });
});
