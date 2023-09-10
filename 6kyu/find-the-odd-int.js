/*
DESCRIPTION:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

//My Solution

//To reduce calculation time, a dictionary could be used, but the conversion seemed to reduce readability
//which is my primary goal

function findOdd(A) {
    var numCount = [];
    //For each number in A, make an object storing both the number and its count that gets updated every
    //time a new instance of the number is found
    A.forEach((num) => {
      var index = numCount.findIndex((count) => count.num == num);
      if(index == -1) {
        numCount.push({num: num, count: 1});
      } else {
        numCount[index].count = numCount[index].count + 1;
      }
    });
    return numCount.find((num) => num.count % 2 == 1).num;
  }