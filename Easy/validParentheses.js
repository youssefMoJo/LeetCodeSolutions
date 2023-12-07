/**
 * Question: https://leetcode.com/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-interview-150
 * Determines if a given string containing brackets is valid.
 * @param {string} s - The input string with brackets.
 * @return {boolean} - True if the brackets are valid, false otherwise.
 */
var isValid = function (s) {
  // Initialize an empty stack to keep track of open brackets.
  let stack = [];

  // Define a map of closing brackets to their corresponding open brackets.
  let closingBrackets = { "]": "[", ")": "(", "}": "{" };

  // Iterate through each character in the input string.
  for (const char of s) {
    // If the current character is a closing bracket.
    if (closingBrackets.hasOwnProperty(char)) {
      // Check if the stack is empty or the top of the stack doesn't match the corresponding open bracket.
      if (stack.length === 0 || stack.pop() !== closingBrackets[char]) {
        return false; // Invalid brackets, return false.
      }
    } else {
      // If the current character is an opening bracket, push it onto the stack.
      stack.push(char);
    }
  }

  // After iterating through the entire string, check if the stack is empty.
  return stack.length === 0;
};

// Test cases
let s = "()";
let s1 = "()[]{}";
let s2 = "(]";
console.log(isValid(s)); // Output: true
console.log(isValid(s1)); // Output: true
console.log(isValid(s2)); // Output: false
