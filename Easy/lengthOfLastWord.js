// Problem: Length of Last Word
// Link: https://leetcode.com/problems/length-of-last-word/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  // Use trim() to remove leading and trailing whitespaces from the string.
  // Split the string into an array of words using space as the delimiter.
  // Pop() retrieves and removes the last element from the array (which is the last word).
  // Finally, return the length of the last word.
  return s.trim().split(" ").pop().length;
};
