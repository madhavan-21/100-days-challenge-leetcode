// leetcode problem no : 438. Find All Anagrams in a String

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const findAnagrams = (s, p) => {
    const output = [];
    const neededChars = {};
    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++
        } else neededChars[char] = 1
    }
    let left = 0;
    let right = 0; 
    let count = p.length 
    while (right < s.length) {
        if (neededChars[s[right]] > 0) count--;
        neededChars[s[right]]--;
        right++;
        if (count === 0) output.push(left);

        if (right - left == p.length) {
            if (neededChars[s[left]] >= 0) count++;
            
            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
};