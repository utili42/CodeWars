/*
DESCRIPTION:
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
*/

//My Solution

/*
First attempt was a recursive solution, which I struggled with and had to look up a similar solution
to pick apart and replicate. Basic idea is to pick a character, then get every permutation of the
other characters recursively (so a smaller set each time) until the break case at 1 or fewer length
returns itself, since a single character or an empty character is the set of all possible permutations.

However, this stumbled on the single character, since it returned a string rather than array, though
since strings are treated as character arrays in JS, this was solved by a simple cast in the base case.
The real pitfall was removing duplicates, as this method assumes unique characters to avoid duplicated
permutations - unfortunately, being recursive, simply filtering out duplicates or making it a Set doesn't
always work, since there may be duplicated sub-sets in the process of generating all permutations for
an input with non-unique characters.

Next, I looked up official algorithms, namely the Steinhaus-Johnson-Trotter algorithm for generating
permutations (https://en.wikipedia.org/wiki/Steinhaus%E2%80%93Johnson%E2%80%93Trotter_algorithm).
While clever, I was having trouble grasping it until skimming the Even's Speedup, which made more sense
and showed that it was dependent on sizes - thus, for non-unique inputs, I suspect it would fail, and 
looked elsewhere, finding eventually Heap's Algorithm (https://en.wikipedia.org/wiki/Heap%27s_algorithm).

Heap's Algorithm is far less intuitive, but appears to be using some clever trick of even & odd to
minimize the number of swaps, with the rightmost position in the array staying static until all
other permutations are found. Which, come to think of it, is similar to my recursive solution. It
has a different implementation not reliant on swapping, but the results feel similar, so I suspect
with a bit more thinking, I could piece together how Heap's swapping is shortcutting some of the 
redundant elements of the recursive algorithm I found first. However, as the non-recursive version
of it might as well be broken out into its own helper function, I think the cleanest, truest way to
solve this for me is to break out the recursive algorithm into its own function, then sort it in the
original function.
*/


function permutations(string) {
    ret = [...new Set(permRecursive(string))];
    return ret;
  }
  
  function permRecursive(string) {
    if(string.length <= 1) {
      return string;
    } 
    
    let ret = [];
    
    for(let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      const otherChars = string.slice(0, i) + string.slice(i + 1);
      
      const permutedOtherChars = permRecursive(otherChars);
      
      for(let j = 0; j < permutedOtherChars.length; j++) {
        permutation = currentChar + permutedOtherChars[j];
        ret.push(permutation);
      }
    }
    
      return ret;
  }