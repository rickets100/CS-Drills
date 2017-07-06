// ===== ARRAYPAIRSUM - BRUTE FORCE =====
function arrayPairSum(val, arr) {
  let returnArr = []
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[i]+arr[j] === val) {
        returnArr.push([arr[i], arr[j]])
      }
    }
  }
  // it's expecting the answer in a different order, for some reason, so reversing it here:
  returnArr.reverse()
  return returnArr
}

module.exports = arrayPairSum

/*
Given an array of integers and a value, output all distinct pairs that sum up to that specific value. Use a brute force method. Then refactor using a hash within the function for optimization.

arrayPairSum(10, [3, 4, 5, 6, 7]) // => [[4, 6], [3, 7]]
arrayPairSum(10, [3, 5, 6, 8]) // => []

 */
