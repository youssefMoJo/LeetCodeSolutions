/**
 * Merge Sorted Array
 *
 * Problem Link: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} nums1 - The first sorted array with extra space to accommodate the merged result.
 * @param {number} m - The number of elements in nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of elements in nums2.
 * @return {void} Do not return anything, modify nums1 in-place.
 */
var merge = function (nums1, m, nums2, n) {
  if (n === 0) {
    // If nums2 is empty, no merging is needed. Return nums1 as is.
    return nums1;
  }

  // Start merging from the end of nums1 array.
  for (i = m + n - 1; i >= 0; i--) {
    if (nums1[m - 1] >= nums2[n - 1]) {
      // If the current element in nums1 is greater or equal, place it in nums1.
      nums1[i] = nums1[m - 1];
      m -= 1; // Decrease the index in nums1.
    } else {
      // If the current element in nums2 is greater, place it in nums1.
      nums1[i] = nums2[n - 1];
      n -= 1; // Decrease the index in nums2.
    }
    if (n <= 0) {
      // If we have merged all elements from nums2, exit the loop.
      i = 0;
    }
  }
  return nums1;
};
