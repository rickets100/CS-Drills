# Big O Questions

We want you answer the following questions about a list of programs (provided separately).

1. Define `n` for this program. `n` must represent the 'size' of the input to the program. Your definition should give someone enough information to give a number to `n` if you provide some sample input to the program. Provide 3 such examples for each problem.

1. Write a formula that estimates as accurately as possible the number of operations the provided program requires. (on the longer programs, it's okay for this to be off by a few).

1. Reduce this formula to a simplified estimate that you feel better captures the essence of the programs time complexity.

1. Reduce this estimate to it's __Big O__ notation.

### An Example of a Complete Answer:

```js
function printValuesAndMultiples(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i]*arr[j]);
  }
}
```

1. In this example, the size of the input can be defined as the length of the variable `arr`. In other words, `n=arr.length`.

  Examples:
  * `printValuesAndMultiples([1, 2, 3])` then `n=3`.
  * `printValuesAndMultiples([1, 2, 3, 4, 5])` then `n=5`.
  * `printValuesAndMultiples([1])` then `n=1`.  

1. The MOST detailed formula is: `2 + 7n + 6n^2`.   

  2 operations always happen exactly once:
   * `let i = 0` twice,

  4 operations happen once per n in the first loop:
  * `i < arr.length;`,
  * `i++`,
  * array access with `arr[i]`
  * `console.log`

  3 more operations occur once per n in the outer loop of the second loop blocks:
  * `let j = 0` (j, not i)
  * `i < arr.length` (i, not j)
  * `i++`

  6 operations happen n^2 times. These are the operations in the inner loop.
  * `j < arr.length`
  * `j++`
  * `arr[i]`
  * `arr[j]`
  * `console.log`
  * Multiplication

  And all of this makes a BIG assumption that `console.log` is a __constant time__ operation.

1. Simplified: `2n + 2n^2`.

  Drop the constants, because it's easy and if we're left with nothing after dropping them we'll know our big O is constant. Now we have 2 major operation per n:
  * `console.log` in the first loop
  * Array access in the first loop

  and we have 4 major operations per n^2:
  * `console.log` in the second loop
  * 2 Array Accesses `arr[j]`, `arr[i]`
  * The multiplication

  When estimating, it's fine to be off by a bit on the __scalar__ values, but getting the __powers__ or __logarithms__ right is crucial.

1. `O(n^2)`, as `n` grows, the operations done in the first loop contribute less and less to the overall performance of the algorithm. In our case, based on the complete formula, as soon as `n > 1`, the terms in `n^2` dominate the program. Consider our original formula again:

`2 + 7n + 6n^2`, when n = 1 this yields `2 + 7 + 6`
`2 + 7n + 6n^2`, when n = 2 this yields `2 + 14 + 24`

#### Food for thought:

Because BigO is concerned with asymptotic complexity, sometimes the nuance and impact on __actual performance__ can be lost. What if we did the initial analysis for a problem and found it was `10000000000000n + 1n^2`? In this case n has to be 3,162,277 before the n^2 term dominates, but we would still call this `O(n^2)`.

In practice these constants matter, and in practice the asymptotes also matter. If you forget to think about both, you might not solve the right performance problem.

# The Problems:

1. Fibbonacci Sequence Iteratively:

  ```js
  function fibbonacciIterative(n) {
    if (n <= 1) {
      return 1;
    }

    var fibNumber;
    var numberOne = 1;
    var numberTwo = 1;

    for (var i = 1; i < n; i++) {
      fibNumber = numberOne + numberTwo;
      numberOne = numberTwo;
      numberTwo = fibNumber;
    }

    return fibNumber;

  }
  ```

#### Fibbonacci Solution

`n` is the value of the variable `n` in this case. For example:
  * if we did `fibbonacciIterative(3)` then n = 3
  * if we did `fibbonacciIterative(10)` then n = 10
  * if we did `fibbonacciIterative(50)` then n = 50

This code has a terminating sequence at `n <= 1` which throws a wrinkle into writing a highly accurate formula for the number of statements executed. It's perfectly fine to just separate these cases:

When n <= 1: we execute 2 statements:
* `n <= 1`
* `return 1`

All the other times we have a formula in the neighborhood of: `8 + 6n`. I counted these 9 statements:

```js
if (n <= 1) { // 1 this comparison always occurs
  return 1; // 0, this can't happen when n > 1
}

var fibNumber; // 1
var numberOne = 1; // 2, declaration and assignment
var numberTwo = 1; // 2, declaration and assignment

var i = 1; // 1, in the for loop declaration

return fibNumber; // 1
```

I then counted these 6 statements happening n times:

```js
for (var i = 1; i < n; i++) { // 2, the comparison and increment
  fibNumber = numberOne + numberTwo; // 2, assignment and addition
  numberOne = numberTwo; // 1
  numberTwo = fibNumber; // 1
}

```

For the simplified step, I just count lines of code that happen in the loop, and other lines:

`5 + 3n`

Big O -- drop the constants, drop the scalars, and pick the largest order of magnitude: `O(n)`

2. Counting all the characters in a string:

  ```js
  function countCharacters(input) {

    var characterCounts = {};

    for (var i = 0; i < input.length; i++) {
      var c = input[i];

      if (characterCounts[c] === undefined) {
        characterCounts[c] = 1;
      }

      else {
        characterCounts[c] += 1;
      }
    }

    return characterCounts;
  }
  ```

#### countCharacters Solution

`n` is the length of the string `input` in this function. For example:
* `countCharacters('a')` n = 1
* `countCharacters('hello')` n = 5
* `countCharacters('This is a longer string')` n = 23

A very detailed formula will be close to: `7 + 9n`. The 7 are:
*  `var characterCounts = {};` 3, declare a var, create an object, assign a value
* `var i = 0;` 2, declaration and assignment
* `return characterCounts` 1
* `var c` the assignment of this variable is hoisted because it uses `var`.

The 9n are:
* `i < input.length;` 2, comparison, and accessing .length from input
* `i++` 1
* `c = input[i];` 2, assignemnt and array access
* `if (characterCounts[c] === undefined) {` 2, array access and comparison
* `characterCounts[c] = 1;` 2, array access and assignment
* I didn't count the statements inside of the else block separately because only one of the if, or the else can execute.

To simplify, again I'll just count the number of lines in the for loop, and the number of lines elsewhere:

`2 + 3n` -- again I only counted one of the lines inside if OR else, because only one can happen each time.

For Big O, drop the constants and scalars: `O(n)`.

3. Using `countCharacters`, report if all the characters are unique.
  > hint: Use the formula for countCharacters to determine the cost of calling that function.

  ```js

  function allUnique(input) {
    var characterCounts = countCharacters(input);

    for (character in characterCounts) {
      if (characterCounts[character] !== 1) {
        return false;
      }
    }

    return true;
  }
  ```

Once again, `n` is the length of the string input.
* `allUnique('a')` n = 1
* `allUnique('hello')` n = 5
* `allUnique('This is a longer string')` n = 23

This problem has a gotcha! The first line of code includes a function call -- and that function performs and algorithm that we just analyzed! We have to consider the efficiency of that function in our analysis of this function. So, here I came up with the formula: `(3 + 3n) + (7 + 9n)` => `9 + 11n`

The `7 + 9n` is simply the solution from countChars which is called once. The `3 + 3n` are from:

The three:
* `var countChars = ...`, 2 declaration and assignment
* `return true` 1, return

The 3n:
* `character in characterCounts` 1
* `characterCounts[character] !== 1` 2, object access and comparison

There is a wrinkle here: The function may terminate early due to the return statement inside our for-loop. Although this is true, because when we're thinking about Big O we are concerned with the worst case scenario, I chose to write the formula against that situation (one where we do not terminate early). When thinking about true runtime performance, these kinds of "short circuiting" optimizations can be powerful, but are not captured by Big O notation.

When simplifying, I'll steal the previous simplified formula, and once again just count lines instead of operations.

`(2 + 3n) + (1 + 2n)`.

Big O: `O(n)`

4. Longest Palindromic Substring.
> hint: `_isPalindrome` is a sub-routine of longestPalindrome, so to determine the overall bigO of longestPalindrome, you must find the bigO of `_isPalindrome`

  ```js
  function longestPalindrome(str) {
    var longest = ''; // 2, declaration and assignment

    if (typeof str !== 'string') return longest; // 2, typeof and comparison

    for (var start = 0; start < str.length; start++) { // 2, and 3n
        for (var end = start + 1; end < str.length + 1; end++) { // 3n and 4n^2
            var curSubString = str.substring(start, end) // 2n^2, and... what is the cost of Substring??
            if (curSubString.length > longest.length && _isPalindrome(curSubString)) { // 4n^2 + 5n^2 + 4n^3 (see below)
                longest = curSubString; // 1n^2
            }
        }
    }

    return longest; // 1
  }

  // Because _isPalindrome is always called from within a nested for loop -- everything inside this
  // function happens n^2 times already, meaning the things inside THIS for loop, are going to be n^3
  // function in total: 5n^2 + 4n^3
  function _isPalindrome(str) {
      var reversed = ''; // 2n^2
      for (var i = str.length - 1; i >= 0; i--) { // 2n^2 + 2n^3
          reversed += str[i]; // 2n^3
      }

      return reversed === str; // n^2
  }
  ```

#### Palindrome Solution

WOW, lots of code here right? We're probably going to miss a few statements or count things differently when trying to be as precise as possible. I gave it a shot anyway, but with SO MANY operations there is a lot of room for disagreement. Your answer may vary, but if you're in the same ballpark call it good... Tallying up the comments above, I came up with:

`6 + 6n + 15n^2 + 4n^3`

Knowing the how the `string.substring` function works would give us even more operations. It will turn out that substring is a `O(n)` operation, but this wasn't included in the above analysis. But if we had, it would push the number of `n^3` operations up, since it was a linear operation happening inside the nested for loops.

For the simplified version, this time I am just going to round the numbers down to their nearest power of ten. This is okay to do in this context (and really would have been okay for all of these) because we are really interested in the performance of the algorithms when `n` is very large. Having a constant of 100 vs 1000 vs 100000 will impact our performance at large scales, but the difference between 3 and 4 will not.

`1 + 1n + 10n^2 + n^3`

For Big O -- eliminate the scalars and constants all together:

`O(n^3)`

### Bonus

How do you determine the big O for recursive algorithms? Try the same process for this:

1. Recursive Fibbonacci.
  ```js
  function fibbonacciRecursive(n) {

    if (n <= 1) {
      return 1;
    }

   return fibbonacciRecursive(n - 1) + fibbonacciRecursive(n - 2);
  }
  ```

Once again `n` is the value of the argument `n`. However, the rest of this problem is not so straight forward. In fact, we're not even going to attempt to "count" all the operations.

The Big O of this algorithm is `O(2^n)` -- terrible performance, and the opposite of `O(log(n))`. Proving the big o of recursive algorithms is often very tricky, for details see the answers here: http://stackoverflow.com/questions/3255/big-o-how-do-you-calculate-approximate-it

The intuitive way to understand why this is `O(2^n)` is that each time this function is called, it makes 2 additional calls to itself. The amount of work being done doubles -- the first call spawns 2 processes, each of those processes spawn 2 more (leaving us with 4). Each of those 4 spawn 2 MORE processes leaving us with 8... then 16, then 32, then 64 .... and so on. We will double the work roughly `n` times because the recursive calls decrease the value of `n` by 1 each step. So, we need to perform `n` splits and each split doubles the amount of work -- therefore our algorithm is `O(2^n)`
