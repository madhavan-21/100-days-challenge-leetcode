//leetcode no - 451. Sort Characters By Frequency
//Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

var frequencySort = function(s) {
    const counter = new Map();

    for(const char of s){
        counter.set(char,(counter.get(char)||0)+1);
    }

    const pq = Array.from(counter.entries());
    pq.sort((a,b)=>b[1]-a[1]);

    let result = '';
    for(const[char , freq ]of pq){
        result +=char.repeat(freq);
    }

    return result;
};