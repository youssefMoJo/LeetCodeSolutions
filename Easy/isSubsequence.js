// Problem: https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * Check if s is a subsequence of t.
 * @param {string} s - The potential subsequence.
 * @param {string} t - The string to search within.
 * @return {boolean} - True if s is a subsequence of t, otherwise false.
 */
var isSubsequence = function(s, t) {
    // If s is an empty string, it is always a subsequence of any string.
    if (s.length === 0) {
        return true;
    }

    // Initialize an index for the characters of s.
    let sIndex = 0;

    // Iterate through each character in t.
    for (let i = 0; i < t.length; i++) {
        // If the current characters match, move to the next character in s.
        if (s[sIndex] === t[i]) {
            sIndex += 1;

            // If all characters in s are matched, s is a subsequence of t.
            if (sIndex === s.length) {
                return true;
            }
        }
    }

    // If we reach here, not all characters in s were found in t.
    return false;
};

// Example usage
let s = "abc";
let t = "ahbgdc";
console.log(isSubsequence(s, t));
