function compress(chars: string[]): number {
  let charsLength = chars.length;

  if (charsLength === 1) return 1;

  let writeIndex = 0;
  let readIndex = 0;

  while (readIndex < charsLength) {
    // Track the incrementing index while matching the current read value to find the count of the current character.
    let trackerIndex = readIndex;
    while (
      trackerIndex < charsLength &&
      chars[readIndex] === chars[trackerIndex]
    ) {
      trackerIndex++;
    }

    let count = trackerIndex - readIndex;

    // Write the current character to the writeIndex and increment the writeIndex.  
    chars[writeIndex] = chars[readIndex]!;
    writeIndex++;

    // If the count is greater than 1, append the count as individual characters to the array and increment the writeIndex.
    if (count > 1) {
      for (const d of count.toString()) {
        chars[writeIndex] = d;
        writeIndex++;
      }
    }

    // Appropriately move to the next value that needs to be read and compressed.
    readIndex = trackerIndex;
  }

  return writeIndex;
}

// Test Cases
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6, chars = ["a","2","b","2","c","3"]
console.log(compress(["a", "b", "c"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
);
console.log(compress(["1"]));
console.log(compress(["@", "@", "#", "#", "#", "$"]));
console.log(
  compress([
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "B",
    "B",
    "B",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "q",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "8",
    "|",
    "|",
    "|",
    "|",
    "|",
    "|",
    "|",
    "|",
    "|",
    "j",
    "j",
    "j",
    "j",
    "j",
    "j",
    "6",
    "6",
    "6",
  ]),
);

/*
Space Complexity: O(1) - We are modifying the input array in place (does not count toward space complexity) and using only a constant amount of extra space for pointers and count.

Time Complexity: O(n) we traverse the array once with readIndex, and writeIndex only moves forward.
 */