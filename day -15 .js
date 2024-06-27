// leetcode - 13. Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
var romanToInt = function(s) {
    const sym = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const cur = sym[s[i]];
      const next = sym[s[i + 1]];

      if (cur < next) {
          result += next - cur;
          i++;
      } else {
          result += cur;
      }
  }

  return result;
};