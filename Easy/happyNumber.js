/**
 * Problem Link: https://leetcode.com/problems/happy-number/?envType=study-plan-v2&envId=top-interview-150
 *
 * Determines whether a number is a happy number.
 * A happy number is defined by the process of repeatedly replacing the number
 * with the sum of the squares of its digits until it reaches 1 or enters a cycle.
 *
 * @param {number} n - The number to check for happiness.
 * @return {boolean} - True if the number is happy, false otherwise.
 */
var isHappy = function (n) {
  // Convert the number to an array of its digits.
  let digitsArray = n.toString().split("");

  // Store intermediate results to detect cycles.
  let visitedResults = {};

  // Continue the process until the number becomes 1 or enters a cycle.
  while (n !== 1) {
    // Calculate the sum of the squares of the digits.
    let sumOfSquares = 0;
    for (let i = 0; i < digitsArray.length; i++) {
      sumOfSquares += parseInt(digitsArray[i], 10) ** 2;
    }

    // Update the digits array for the next iteration.
    digitsArray = sumOfSquares.toString().split("");

    // Update the current number.
    n = sumOfSquares;

    // Check for a cycle using the visitedResults object.
    if (visitedResults[n]) {
      return false; // The number is not happy, as it entered a cycle.
    } else {
      visitedResults[n] = true; // Store the current result to detect future cycles.
    }
  }

  // If the process reaches 1, the number is happy.
  return true;
};

// Example usage:
let n = 19;
console.log(isHappy(n));
