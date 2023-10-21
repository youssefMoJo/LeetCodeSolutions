/**
 * Given an array of numbers 'nums' and a target sum 'target', this function
 * finds two indices in the array that add up to the target. It employs a
 * hash map to efficiently track visited numbers, allowing for a one-pass
 * solution.
 *
 * Problem Statement:
 * https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums - The input array of numbers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the indices of the two numbers
 *   that sum up to the target.
 */
var twoSum = function (nums, target) {
  // Initialize a hash map to store visited numbers and their indices.
  let visitedNums = {};

  // Loop through the input array.
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the target sum.
    const complement = target - nums[i];

    // If the complement is found in the visited numbers, return the indices.
    if (visitedNums[complement] !== undefined) {
      return [visitedNums[complement], i];
    }

    // Record the current number and its index in the hash map.
    visitedNums[nums[i]] = i;
  }
};
