/*
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//My Solution

//Using the (?=) positive lookahead regex to split without removing the delimeter

function solution(string) {
    return string.split(/(?=[A-Z])/).join(" ");
}