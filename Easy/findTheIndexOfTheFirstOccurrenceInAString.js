// LeetCode Question: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3253654/javascript-php-6-solutions-with-explanation-understandable/?envType=study-plan-v2&envId=top-interview-150

/**
 * Returns the index of the first occurrence of the needle in the haystack.
 * If needle is not part of haystack, returns -1.
 *
 * @param {string} haystack - The string to search in.
 * @param {string} needle - The string to search for.
 * @return {number} - The index of the first occurrence of the needle in the haystack.
 */
var strStr = function(haystack, needle) {
    // Iterate through the haystack string
    for (let i = 0; i < haystack.length; i++) {
        // Extract a substring of length equal to the needle starting from the current position in haystack
        let sub = haystack.substring(i, i + needle.length);

        // Check if the extracted substring is equal to the needle
        if (sub === needle) {
            // Return the index if a match is found
            return i;
        }
    }

    // If no match is found, return -1
    return -1;
};

// Example usage:
let haystack = "mississippi";
let needle = "issip";
console.log(strStr(haystack, needle));
// Output: 4
