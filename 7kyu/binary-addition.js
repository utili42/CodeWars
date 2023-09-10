/*
DESCRIPTION:
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//My Solution

//Previously, before I knew about this method, I would have subtracted powers of 2 from a + b (resetting each time)
//until I got a negative number, then parsed backwards into binary

function addBinary(a,b) {
    num = a + b;
    return num.toString(2);
  }