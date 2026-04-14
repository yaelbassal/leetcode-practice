// Valid Palindrome II

/*
Statement:
Write a function that takes a string as input and checks whether it can be a valid
palindrome by removing at most one character from it.

Constraints:
- 1 <= string.length <= 10^5
- The string consists only of English letters.
*/

function isPalindrome(str: string): boolean {
  let startPtr = 0;
  let endPtr = str.length - 1;
  let numRemovedChars = 0;

  while (startPtr < endPtr) {
    if (str[startPtr] === str[endPtr]) {
      startPtr++;
      endPtr--;
    } else {
      // Check if we can remove a character from either end to make it a palindrome
      if (str[startPtr + 1] === str[endPtr]) {
        numRemovedChars++;
        startPtr++;
      } else if (str[endPtr - 1] === str[startPtr]) {
        numRemovedChars++;
        endPtr--;
      } else {
        return false;
      }
    }
  }

  return numRemovedChars <= 1;
}

console.log(isPalindrome("madame"));
console.log(isPalindrome("dead"));
console.log(isPalindrome("abca"));
console.log(isPalindrome("tebbem"));
console.log(isPalindrome("eeccccbebaeeabebccceea"));
