/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let newS = "";
  let hashmap = {};

  for (let i = 0; i < s.length; i++) {
    if (hashmap[s[i]]) {
      newS += hashmap[s[i]];
    } else {
      hashmap[s[i]] = t[i];
      newS += hashmap[s[i]];
    }
  }

  return newS;
};

// let s = "badc";
// let t = "baba";
let s = "foo";
let t = "bar";
console.log(isIsomorphic(s, t));
