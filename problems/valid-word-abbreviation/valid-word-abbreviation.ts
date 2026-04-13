// Valid Word Abbreviation

/*
Statement:
A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings
with their respective lengths. The numeric replacements must not contain leading zeros.

Given a string `word` and an abbreviation `abbr`, determine whether `abbr` is a valid
abbreviation of `word`.

The abbreviation `abbr` consists of lowercase English letters and numeric values.
Each numeric value in `abbr` represents the number of characters skipped in `word`.
Letters in `abbr` must match the corresponding characters in `word` exactly.

The abbreviation is valid if and only if it fully accounts for every character in `word`
from left to right, with no characters remaining or missing.

Note:
- A numeric value in `abbr` must not have leading zeros (e.g., "01" is invalid).
- A value of "0" is also invalid since it would represent replacing an empty substring.

Constraints:
- 1 ≤ word.length ≤ 20
- `word` consists of only lowercase English letters.
- 1 ≤ abbr.length ≤ 10
- `abbr` consists of lowercase English letters and digits.
- All integers in `abbr` will fit in a 32-bit integer.

Example:
Word: "substitution"
Abbr: "s10n"
Expected: true
*/

function validWordAbbreviation(word: string, abbr: string): boolean {
  let wordPointer = 0;
  let abbrPointer = 0;
  let wordLength = word.length;
  let abbrLength = abbr.length;

  while (wordPointer < wordLength && abbrPointer < abbrLength) {
    if (word[wordPointer] === abbr[abbrPointer]) {
      wordPointer++;
      abbrPointer++;
    } else {
      // Edge Cases: invalid values
      if (abbr[abbrPointer] === "0" || isNaN(Number(abbr[abbrPointer]))) {
        return false;
      }

      // Increment pointers based on numeric values
      let abbrNum = "";
      while (abbrPointer < abbrLength && !isNaN(Number(abbr[abbrPointer]))) {
        abbrNum += abbr[abbrPointer];
        abbrPointer++;
      }
      wordPointer += Number(abbrNum);
    }
  }

  // Return true if both pointers have fully traversed their strings (no leftover characters), indicating a valid abbreviation
  return wordPointer === wordLength && abbrPointer === abbrLength;
}

console.log(validWordAbbreviation("substitution", "s10n"));
console.log(validWordAbbreviation("abcdefg", "a05g"));
console.log(validWordAbbreviation("word", "4"));
console.log(validWordAbbreviation("hello", "h3x"));
console.log(validWordAbbreviation("a", "1"));

/*
Space Complexity: O(1) - Only using a constant amount of extra space for pointers and values.

Time Complexity: O(n) - Where n is the combined length of `word` and `abbr`.

Each pointer (`wordPointer` and `abbrPointer`) moves forward without backtracking.
Even though there is a nested while loop to process numeric values in `abbr`,
each character in `abbr` is processed at most once. Therefore, the total number
of operations is linear with respect to the input size.
*/
