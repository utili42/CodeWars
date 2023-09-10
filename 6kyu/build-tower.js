/*
DESCRIPTION:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

//My Solution

//Trickiest bit was that the formula for a given "floor" changes based on the initial value, because 
//the spaces pad it out to the size of the biggest floor.

function towerBuilder(nFloors) {
    ret = [];
    for(n = nFloors; n > 0; n--) {
      ret.unshift(" ".repeat(nFloors - n) + "*".repeat(n * 2 - 1) + " ".repeat(nFloors - n));
    }
    return ret;
  }