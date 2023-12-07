/**
 * Problem Link: https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * Determines if there are two distinct indices i and j in the array nums
 * such that nums[i] equals nums[j] and the absolute difference between i and j is at most k.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} k - The maximum absolute difference between indices.
 * @return {boolean} - True if there are such indices, false otherwise.
 */
var containsNearbyDuplicate = function (nums, k) {
  // Store the last index where each number was seen.
  const visitedIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    // Check if the number has been seen before within the allowed range.
    if (
      visitedIndices.hasOwnProperty(currentNum) &&
      Math.abs(visitedIndices[currentNum] - i) <= k
    ) {
      return true;
    }

    // Update the last index where the number was seen.
    visitedIndices[currentNum] = i;
  }

  return false;
};

// Example usage:
const nums = [1, 2, 3, 1, 2, 3];
const k = 2;
console.log(containsNearbyDuplicate(nums, k));
