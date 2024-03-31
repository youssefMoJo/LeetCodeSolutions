/**
 * Question Link: https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false; // If current index cannot be reached
    }
    maxReach = Math.max(maxReach, i + nums[i]); // Update maxReach
    if (maxReach >= nums.length - 1) {
      return true; // If last index can be reached
    }
  }
  return false; // If last index cannot be reached
};

const nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));
