// Problem link: https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * Removes all occurrences of the specified value from the input array.
 *
 * @param {number[]} nums - The input array of numbers.
 * @param {number} val - The value to remove from the array.
 * @return {number} - The length of the modified array after removal.
 */
var removeElement = function(nums, val) {
    // Initialize a pointer k for the count of non-'val' elements.
    let k = 0;
    
    // Iterate through the array from the beginning.
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to 'value', move it to the new position and update the count.
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k += 1;
        }
    }

    // Return the count of non-'val' elements, which is the new length of the modified array.
    return k;
};
