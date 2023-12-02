/**
 * Check if a pattern and a string follow the same pattern.
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  const patternMap = {};
  const sMap = {};

  if (sArr.length !== pattern.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const currentPatternChar = pattern[i];
    const currentStringWord = sArr[i];

    if (sMap[currentPatternChar]) {
      if (sMap[currentPatternChar] !== currentStringWord) {
        return false;
      }
    } else {
      if (patternMap.hasOwnProperty(currentStringWord)) {
        return false;
      }
      sMap[currentPatternChar] = currentStringWord;
      patternMap[currentStringWord] = currentPatternChar;
    }
  }

  return true;
};

// Example usage:
const pattern = "abba";
const s = "dog constructor constructor dog";
console.log(wordPattern(pattern, s));
