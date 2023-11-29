/**
 * Question: https://leetcode.com/problems/ransom-note/submissions/1109144146/?envType=study-plan-v2&envId=top-interview-150
 * 
 * Determines if a ransom note can be constructed from a magazine.
 * @param {string} ransomNote - The ransom note string.
 * @param {string} magazine - The magazine string.
 * @return {boolean} - Returns true if the ransom note can be constructed from the magazine, otherwise false.
 */
var canConstruct = function(ransomNote, magazine) {
    // Convert magazine to an array of characters
    magazine = magazine.split("");

    // Iterate through each character in the ransomNote
    for (let i = 0; i < ransomNote.length; i++) {
        // Find the index of the current character in the magazine
        let charIndexInMagazine = magazine.indexOf(ransomNote[i]);

        // If the character is found in the magazine
        if (charIndexInMagazine !== -1) {
            // Mark the character as used by replacing it with null
            magazine[charIndexInMagazine] = null;
        } else {
            // If the character is not found, ransom note cannot be constructed
            return false;
        }
    }

    // If all characters in the ransom note are found in the magazine, return true
    return true;
};

// Example usage:
let ransomNoteExample = "aa";
let magazineExample = "ab";
console.log(canConstruct(ransomNoteExample, magazineExample));
