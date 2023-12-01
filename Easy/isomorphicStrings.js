/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let newS = "";
  let sHashmap = {};
  let tHashmap = {};

  for (let i = 0; i < s.length; i++) {
    if (sHashmap[s[i]]) {
      newS += sHashmap[s[i]];
    } else {
      if (tHashmap[t[i]]) {
        return false;
      }

      sHashmap[s[i]] = t[i];
      tHashmap[t[i]] = s[i];
      newS += sHashmap[s[i]];
    }
  }

  return newS === t;
};

let s = "badc";
let t = "baba";
// let s = "foo";
// let t = "bar";
console.log(isIsomorphic(s, t));
