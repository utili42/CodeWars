/*
DESCRIPTION:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1) [Link: https://projecteuler.net/problem=1]
*/

//My Solution

//Leveraging the uniqueness of Sets to avoid complicated anti-duplication logic

function solution(number){
    var ret = 0;
    
    if(number > 0) {
      var multiples = new Set();
      for(i = 0; i < number; i += 3) {
        multiples.add(i);
      }
      for(i = 0; i < number; i += 5) {
        multiples.add(i);
      }
      multiples.forEach((num) => ret += num);
    }
    return ret;
  }