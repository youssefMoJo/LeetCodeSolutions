/**
 * LeetCode #80: Remove Duplicates from Sorted Array II
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Initialize an index variable 'i' to keep track of the valid index for the final result
  let i = 0;

  // Iterate through each element 'num' in the input array 'nums'
  for (let num of nums) {
    // Check if the current index is less than 2 (for the first two elements),
    // or if the current element is greater than the element two positions back
    if (i < 2 || num > nums[i - 2]) {
      // If the condition is met, update the array at index 'i' with the current element
      nums[i++] = num;
    }
  }

  // Return the final length 'i' as the result
  return i;
};

// Test Case 1
let nums1 = [1, 1, 1, 2, 2, 3];
let result1 = removeDuplicates(nums1);
console.log(result1, nums1.slice(0, result1)); // Output: 5, [1, 1, 2, 2, 3]

// Test Case 2
let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let result2 = removeDuplicates(nums2);
console.log(result2, nums2.slice(0, result2)); // Output: 7, [0, 0, 1, 1, 2, 3, 3]
