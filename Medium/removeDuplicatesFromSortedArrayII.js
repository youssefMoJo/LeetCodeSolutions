/**
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

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log(removeDuplicates(nums));
