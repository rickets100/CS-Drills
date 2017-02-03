function arrayPairSum(val, arr) {
  const hash = {};
  const pairs = [];
  arr.forEach((num) => {
    const diff = val - num;
    let len = hash[diff];
    while (len--) {
      pairs.push([diff, num]);
    }
    hash[num] = (hash[num] + 1) || 1;
  });
  return pairs;
}

module.exports = arrayPairSum;
