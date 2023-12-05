/**
 * LeetCode #242 - Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Checks if two strings are anagrams using the sorting approach.
 *
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @return {boolean} - True if the strings are anagrams, false otherwise.
 */
var isAnagramUsingSorting = function (s, t) {
  // Convert both strings to arrays of characters,
  // sort them, and then join them back into strings.
  // If the resulting strings are equal, the original
  // strings are anagrams.
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// Example usage:
let exampleS = "anagram";
let exampleT = "nagaram";

// Output: true
console.log(isAnagramUsingSorting(exampleS, exampleT));

/**
 * Check if two strings are anagrams using character frequency counting.
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @return {boolean} True if the strings are anagrams, false otherwise.
 */
function isAnagramUsingFrequency(s, t) {
  // Check if the lengths of the strings are different, if so, they can't be anagrams.
  if (s.length !== t.length) {
    return false;
  }

  // Object to store the frequency of each character in the first string.
  const charCount = {};

  // Iterate through each character in the first string (s) to populate charCount.
  for (let char of s) {
    // Update character count, handle both initialization and incrementing.
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through each character in the second string (t).
  for (let char of t) {
    // If the character is not present in the first string or its count drops below zero, return false.
    if (!charCount[char]) {
      return false;
    }
    // Decrement the character count to reflect its presence in the second string.
    charCount[char]--;
  }

  // If the loops complete without returning false, the strings are anagrams.
  return true;
}

// Example usage:
let newExampleS = "anagram";
let newExampleT = "nagaram";

// Output: true
console.log(isAnagramUsingFrequency(newExampleS, newExampleT));
