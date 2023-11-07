// Problem link: https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums - The input array of numbers.
 * @param {number} val - The value to remove from the array.
 * @return {number} - The length of the modified array.
 */
var removeElement = function(nums, val) {
    // Initialize two pointers: lp for the new position and k for the count of non-'val' elements.
    let lp = 0;
    let k = 0;
    
    // Iterate through the array from the beginning.
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to 'val', move it to the new position and update the count.
        if (nums[i] !== val) {
            nums[lp] = nums[i];
            lp += 1;
            k += 1;
        }
    }

    // Return the count of non-'val' elements, which is the new length of the modified array.
    return k;
};

=========================================
===  ANOTHER VERSION OF THE SOLUTION  ===
=========================================

// Problem link: https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums - The input array of numbers.
 * @param {number} val - The value to remove from the array.
 * @return {number} - The length of the modified array.
 */
var removeElement = function(nums, val) {
    // Initialize two pointers: lp for the new position and k for the count of non-'val' elements.
    let lp = 0;
    let k = 0;
    
    // Iterate through the array from the end to find 'val' and move it to the end of the array.
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] !== val) {
            // While 'val' is not found, increment lp and k to keep track of non-'val' elements.
            while (nums[lp] !== val) {
                lp += 1;
                k += 1;
            }
            
            // If lp surpasses i, we have moved all 'val' elements to the end, so we return k.
            if (lp > i) {
                return k;
            }
            
            // Swap the element at lp with the current 'val'.
            nums[lp] = nums[i];
            nums[i] = val;
        }
    }
};

