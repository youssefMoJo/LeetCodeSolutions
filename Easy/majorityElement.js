// Problem: Majority Element
// Question Link: https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Initialize the current value as the first element in the array.
    let val = nums[0];
    // Initialize a counter for tracking the frequency of the current value.
    let counter = 1;
    
    // Loop through the array starting from the second element.
    for (let i = 1; i < nums.length; i++) {
        // Check if the current element is equal to the current value.
        if (nums[i] == val) {
            // If equal, increment the counter to indicate one more occurrence.
            counter += 1;
        } else {
            // If not equal, decrease the counter to cancel out one occurrence.
            if (counter != 0) {
                counter -= 1;
            } else {
                // If the counter reaches 0, update the current value to the current element
                // and reset the counter to 1, indicating a new candidate majority element.
                val = nums[i];
                counter += 1;
            }
        }
    }
    
    // The majority element is the final value of 'val'.
    return val;
};
