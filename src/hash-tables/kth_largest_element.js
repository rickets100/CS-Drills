/*
Given an array of integers find the kth element in the sorted order. Use a brute force method. Then refactor using a hash within the function for optimization.
largestElement(2, [3, 5, 6, 8]) // => 5
largestElement(3, [3, 1, 2, 1, 4]) // => 2
 */

 function largestElement(k, arr) {
   const hash  = {};
   let count = 0;

   arr.forEach((num) => {
     hash[num] = hash[num] + 1 || 1;
   });

   for (let i in hash) {
     if (hash.hasOwnProperty(i)) {
       if (k <= count + hash[i] && k > count) {
         return +i;
       }
       count += hash[i];
     }
   }
   return -1;
 }

module.exports = largestElement;
