/**
 * LeetCode #242 - Valid Anagram
 * https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Checks if two strings are anagrams.
 *
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @return {boolean} - True if the strings are anagrams, false otherwise.
 */
var isAnagram = function (s, t) {
  // Convert both strings to arrays of characters,
  // sort them, and then join them back into strings.
  // If the resulting strings are equal, the original
  // strings are anagrams.
  return s.split("").sort().join("") === t.split("").sort().join("");
};

// Example usage:
let s = "anagram";
let t = "nagaram";

// Output the result of the isAnagram function.
console.log(isAnagram(s, t));
