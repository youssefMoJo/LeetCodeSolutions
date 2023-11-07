// Problem link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums - Sorted array of numbers.
 * @return {number} - Number of unique elements.
 */
var removeDuplicates = function(nums) {
    // Initialize a counter to keep track of the number of unique elements.
    let uniqueCount = 1; // Initialize with 1 to account for the first element.

    // Iterate through the array, starting from the second element.
    for (let r = 1; r < nums.length; r++) {
        // If the current element is different from the previous one, it's a unique element.
        if (nums[r] !== nums[r - 1]) {
            // Copy the unique element to its correct position and update the count.
            nums[uniqueCount] = nums[r];
            uniqueCount++;
        }
    }

    // Return the count of unique elements.
    return uniqueCount;
};
