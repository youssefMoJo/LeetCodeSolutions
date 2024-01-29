/**
 * Rotates the elements of the given array to the right by k steps in-place.
 *
 * @param {number[]} nums - The array of numbers to be rotated.
 * @param {number} k - The number of steps to rotate the array to the right.
 * @return {void} - Modifies nums in-place; does not return anything.
 */
var rotate = function (nums, k) {
  const arrLength = nums.length; // Get the length of the array

  // Create a shallow copy of the original array
  let rotatedArray = nums.slice();

  // Iterate through the original array
  for (let i = 0; i < arrLength; i++) {
    // Calculate the next location after rotation
    let nextLoc = (i + k) % arrLength;

    // Update the original array with the rotated elements
    nums[nextLoc] = rotatedArray[i];
  }

  // The original array is now modified in-place with rotated elements
  return nums;
};

// Example usage:
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(rotate(nums, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
