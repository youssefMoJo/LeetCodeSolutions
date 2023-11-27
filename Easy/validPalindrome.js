// LeetCode Question: https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150

/**
 * Check if a given string is a valid palindrome.
 * @param {string} s - The input string to be checked.
 * @return {boolean} - Returns true if the string is a valid palindrome, otherwise false.
 */
var isPalindrome = function (s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  // Initialize pointers at the start and end of the string
  let l = 0;
  let r = s.length - 1;

  // Iterate until the pointers meet
  while (l < r) {
    // If characters at the pointers are not equal, it's not a palindrome
    if (s[l] !== s[r]) {
      return false;
    }
    // Move the pointers towards the center
    l += 1;
    r -= 1;
  }
  // If the loop completes, the string is a palindrome
  return true;
};

// Example usage:
let inputString = "A man, a plan, a canal: Panama";
console.log(
  `Is "${inputString}" a valid palindrome? ${isPalindrome(inputString)}`
);
