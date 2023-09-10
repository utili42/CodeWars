/*
DESCRIPTION:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

//My Solution

//An exact equals === is needed to account for the mixed-type array, since false and the like are 
//considered == 0

function moveZeros(arr) {
    for(i = arr.length; i >= 0; i--) {
      value = arr.at(i);
      if(value === 0) {
        arr.push(value);
        arr.splice(i, 1);
      }
    }
    return arr;
  }