/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let ArrLength = nums.length;
  let NA = nums.slice();

  for (let i = 0; i < ArrLength; i++) {
    let nextLoc = (i + k) % ArrLength;
    nums[nextLoc] = NA[i];
  }

  return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(rotate(nums, k));
