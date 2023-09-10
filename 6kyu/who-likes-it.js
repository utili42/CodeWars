/*
DESCRIPTION:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

//My Solution

/* While not necessarily the most concise form of this function, I selected the individual if statements
for my solution to handle the function in an easy-to-read format that I can write in minutes without
spending an inordinate amount of time finding the "perfect" solution when that isn't necessarily needed.*/

function likes(names) {
    numLikes = names.length;
    ret = "";
    if(numLikes <= 0) {
      ret = "no one likes this";
    } else if(numLikes == 1) {
      ret = names[0] + " likes this";
    } else if (numLikes == 2) {
      ret = names[0] + " and " + names[1] + " like this";
    } else if (numLikes == 3) {
      ret = names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      ret = names[0] + ", " + names[1] + " and " + (numLikes - 2) + " others like this";
    }
    return ret;
  }