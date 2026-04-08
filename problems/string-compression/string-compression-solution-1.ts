// String Compression

/*
Statement:
Given an array of characters, `chars`, compress it in place according to the following rules:

Start with an empty string `s`.

For each group of consecutive repeating characters in `chars`:
- If the group length is 1, append just the character to `s`.
- Otherwise, append the character followed by the group length.

The compressed string `s` should not be returned separately; instead, it must be written
directly into the input character array `chars`. Note that if a group’s length is 10 or
greater, each digit of the length should be stored as a separate character in `chars`.

After modifying the array, return the new length of the compressed array.

Note:
- Your solution must use only constant extra space.
- Any characters beyond the returned length in `chars` can be ignored.

Constraints:
- 1 ≤ chars.length ≤ 2000
- chars[i] is a lowercase English letter, an uppercase English letter, a digit, or a symbol.

Example 1: 
Input: ["a","a","b","b","c","c","c"]
Output: 6, chars = ["a","2","b","2","c","3"]

*/

function compress(chars: string[]): number {
  // Edge Case
  if (chars.length === 1) return 1;

  let pointer1 = 0;
  let pointer2 = 1;
  let count = 1;

  while (pointer2 <= chars.length) {
    if (chars[pointer1] === chars[pointer2]) {
      count++;
      pointer2++;
    } else {
      if (count > 1) {
        const stringCount = count.toString();
        // Overwrite the repeated characters after pointer1 with the numeric digits of count.
        // After splice, the next original character is at pointer1 + 1 + stringCount.length.
        chars.splice(pointer1 + 1, count - 1, ...stringCount.split(""));
        pointer1 += stringCount.length + 1;
      } else {
        // No compression was needed for a single character.
        pointer1 = pointer2;
      }

      // Start scanning from the next character after the compressed segment.
      pointer2 = pointer1 + 1;
      count = 1;
    }
  }

  return chars.length;
}

// Test Cases
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6, chars = ["a","2","b","2","c","3"]
console.log(compress(["a", "b", "c"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
);
console.log(compress(["1"]));
console.log(compress(["@", "@", "#", "#", "#", "$"]));
console.log(compress(["p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","B","B","B","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","q","8","8","8","8","8","8","8","8","8","8","8","8","8","8","8","8","8","|","|","|","|","|","|","|","|","|","j","j","j","j","j","j","6","6","6"]));
