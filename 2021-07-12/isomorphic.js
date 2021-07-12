// link:https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  const alreadyMapped = new Set();

  for (let i = 0; i < s.length; i++) {
    let sChar = s.charAt(i);
    let tChar = t.charAt(i);

    if (map.has(sChar)) {
      if (map.get(sChar) !== tChar) {
        return false;
      }
    } else if (alreadyMapped.has(tChar)) {
      return false;
    } else {
      map.set(sChar, tChar);
      alreadyMapped.add(tChar);
    }
  }

  return true;
};
