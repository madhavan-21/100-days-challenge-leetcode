//leetcode no - 424. Longest Repeating Character Replacement
//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

var characterReplacement = function(s, k) {
    let count = {}
    let res = 0;

    let l = 0;
    let maxf = 0;
     for(let r= 0;r<s.length;r++){
        count[s[r]] = count[s[r]] +1 || 1
        maxf = Math.max(maxf , count[s[r]]);

        while((r-l+1)-maxf > k){
            count[s[l]]--
            l++
        }
        res = Math.max(res , r-l+1)
     }
     return res
};