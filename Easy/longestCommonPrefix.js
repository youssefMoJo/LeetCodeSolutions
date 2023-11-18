// Problem: Longest Common Prefix
// Link: https://leetcode.com/problems/longest-common-prefix/solutions/4010931/5-liner-easy-approach-with-explanation/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} strs - An array of strings
 * @return {string} - The longest common prefix among the strings
 */
var longestCommonPrefix = function(strs) {
    // Check if the input array is empty
    if (strs.length === 0) {
        return "";
    }

    // Initialize prefix with the first string in the array
    let prefix = strs[0];

    // Iterate through the array starting from the second string
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the current prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by removing the last character
            prefix = prefix.slice(0, -1);

            // If the prefix becomes empty, return an empty string
            if (prefix === "") {
                return "";
            }
        }
    }

    // Return the final calculated prefix
    return prefix;
};

// Example usage
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
