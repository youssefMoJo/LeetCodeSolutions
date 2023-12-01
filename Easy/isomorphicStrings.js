/**
 * LeetCode Question: https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 *
 * Determines if two strings are isomorphic.
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @return {boolean} - True if the strings are isomorphic, false otherwise.
 */
const isIsomorphic = (s, t) => {
  // Maps to store character mappings between s and t
  const sMap = new Map();
  const tMap = new Map();

  // Resulting isomorphic string
  let newS = "";

  // Iterate through each character in the strings
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    // If the mapping for sChar exists, append it to newS
    if (sMap.has(sChar)) {
      newS += sMap.get(sChar);
    } else {
      // If tChar is already mapped to another sChar, return false
      if (tMap.has(tChar)) {
        return false;
      }

      // Create mappings between sChar and tChar
      sMap.set(sChar, tChar);
      tMap.set(tChar, sChar);

      // Append tChar to the resulting isomorphic string
      newS += tChar;
    }
  }

  // Check if the resulting isomorphic string equals t
  return newS === t;
};

// Example usage:
const result = isIsomorphic("egg", "add");
console.log(result); // Output: true
