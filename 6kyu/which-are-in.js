/*
DESCRIPTION:
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/

//My Solution

//Filter the words in the substring array (a1) by seeing if some string in the string array (a2) contains
//each given word as a substring, then sort in ascending order

function inArray(a1,a2) {
    return a1.filter((word) => a2.some((string) => {
        return string.includes(word);
      })).sort();
  }