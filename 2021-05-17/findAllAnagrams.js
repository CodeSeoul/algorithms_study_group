// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const answer = [];
  const chars = new Array(26).fill(0);
  const len = p.length;

  p.split("").forEach((c) => {
    // 'a' charCode is 97
    chars[c.charCodeAt(0) - 97]++;
  });

  let slow = 0,
    fast = 0,
    missing = len;

  while (fast < s.length) {
    let rightIdx = s.charCodeAt(fast) - 97;
    if (chars[rightIdx] > 0) {
      missing--;
    }
    chars[rightIdx]--;
    if (missing === 0) {
      answer.push(slow);
    }
    fast++;
    if (fast - slow === len) {
      let leftIdx = s.charCodeAt(slow) - 97;
      // ahppens to be a part of the original p since rightIdx dec
      if (chars[leftIdx] >= 0) {
        missing++;
      }
      // since rightIdx decremented everything and we're moving on
      chars[leftIdx]++;
      slow++;
    }
  }
  return answer;
};
