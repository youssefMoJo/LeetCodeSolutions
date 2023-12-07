/**
 * LeetCode Question: https://leetcode.com/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Given an array of sorted numbers, this function generates summary ranges
 * and returns them as an array of strings.
 *
 * @param {number[]} nums - The input array of sorted numbers.
 * @return {string[]} - An array of strings representing the summary ranges.
 */
var summaryRanges = function (nums) {
  // Initialize an empty array to store the result.
  const result = [];
  // Get the length of the input array for loop termination condition.
  const numsLength = nums.length;

  // Initialize two pointers, l and r, to track the start and end of a potential range.
  let l = 0;
  let r = 1;

  // Iterate through the array until the end is reached.
  while (l < numsLength || r < numsLength) {
    // Retrieve the current left, right, and right-minus-one numbers.
    let currentRightNum = nums[r];
    let currentRightMinusOneNum = nums[r - 1];
    let currentLeftNum = nums[l];

    // Check if the current range is consecutive; if so, extend the range.
    if (currentRightNum - currentRightMinusOneNum === 1) {
      r += 1;
    } else {
      // Create a string representing the range based on its length.
      let range =
        r - 1 - l >= 1
          ? `${currentLeftNum}->${currentRightMinusOneNum}`
          : `${currentLeftNum}`;

      // Add the range to the result array and update pointers for the next iteration.
      result.push(range);
      l = r;
      r += 1;
    }
  }

  // Return the final array of summary ranges.
  return result;
};

// Example usage with the provided array 'nums'.
let nums = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums));
