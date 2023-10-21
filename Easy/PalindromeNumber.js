/**
 * @param {number} x - The input number to check for palindromic property.
 * @return {boolean} - Returns true if 'x' is a palindrome, and false otherwise.
 *
 * Problem Statement:
 * https://leetcode.com/problems/palindrome-number/
 */
var isPalindrome = function (x) {
  // Check if the input number is negative; negative numbers cannot be palindromes.
  if (x < 0) {
    return false;
  }

  // Initialize 'div' to 1, which is used to find the highest place value in 'x'.
  let div = 1;

  // Find the highest place value in 'x'.
  while (x >= div * 10) {
    div *= 10;
  }

  // Compare the left and right digits of 'x' for palindromic property.
  while (x) {
    // Extract the rightmost digit of 'x'.
    let right = x % 10;

    // Extract the leftmost digit of 'x' by dividing it by 'div'.
    let left = Math.floor(x / div);

    // If the left and right digits are not the same, 'x' is not a palindrome.
    if (right !== left) {
      return false;
    }

    // Remove the leftmost and rightmost digits of 'x'.
    x = x % div;
    x = Math.floor(x / 10);

    // Adjust 'div' to match the updated 'x'.
    div /= 100;
  }

  // If all checks pass, 'x' is a palindrome.
  return true;
};
