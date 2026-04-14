// Valid Palindrome II

/*
Statement:
Write a function that takes a string as input and checks whether it can be a valid
palindrome by removing at most one character from it.

Constraints:
- 1 <= string.length <= 10^5
- The string consists only of English letters.
*/

function isValid(str: string, leftPointer: number, rightPointer: number) {
  while (leftPointer < rightPointer) {
    if (str[leftPointer] !== str[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }
  return true;
}

function isPalindrome(str: string): boolean {
  let startPtr = 0;
  let endPtr = str.length - 1;

  while (startPtr < endPtr) {
    if (str[startPtr] === str[endPtr]) {
      startPtr++;
      endPtr--;
    } else {
      // Check if we can remove a character from either end to make it a palindrome
      return (
        isValid(str, startPtr + 1, endPtr) || isValid(str, startPtr, endPtr - 1)
      );
    }
  }

  return true;
}

console.log(isPalindrome("madame"));
console.log(isPalindrome("dead"));
console.log(isPalindrome("abca"));
console.log(isPalindrome("tebbem"));
console.log(isPalindrome("eeccccbebaeeabebccceea"));
console.log(isPalindrome("abcdecba"));
