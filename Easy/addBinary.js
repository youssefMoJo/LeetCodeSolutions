/**
 * Problem link: https://leetcode.com/problems/add-binary/description/
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let maxLength = Math.max(a.length, b.length);
  let carry = 0;
  let sum = "";

  // Reverse the strings to process from least significant to most significant bit
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");

  // Loop through the bits of both numbers
  for (let i = 0; i < maxLength; i++) {
    let currentNumA = i < a.length ? Number(a[i]) : 0;
    let currentNumB = i < b.length ? Number(b[i]) : 0;
    let addition = currentNumA + currentNumB + carry;

    // Calculate sum and carry for the current bit
    sum = (addition % 2) + sum;
    carry = Math.floor(addition / 2);
  }

  // If there's still a carry, add it to the result
  if (carry) {
    sum = "1" + sum;
  }

  return sum;
};

let a = "100";
let b = "110010";
console.log(addBinary(a, b));
