/*
Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
isSquare (-1) // => false
isSquare   3  // => false
isSquare   4  // => true
isSquare  25  // => true
isSquare  26  // => false
*/

var isSquare = function(n){
    let root = n**(1/2);
    if ( (n**(1/2) % 1 !== 0) || (n < 0)) {
      return false;
    }
    else {
    return true;
  }
    }


    function isSquare(n) {
        return Math.sqrt(n) % 1 === 0;
      }


    const isSquare = n => Number.isInteger(Math.sqrt(n));