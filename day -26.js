// leetcode - 131.Palindrome Partitioning

var partition = function(s) {
    let ans = new Array();
    function helper(s, ans, idx, store){
        if(idx == s.length){
            let temp = new Array();
            for(let i = 0; i < store.length; i++){
                temp.push(store[i]);
            }
            ans.push(temp);
            return;
        }

        for(let i = idx; i < s.length; i++){
            if(!validPalindrome(s, idx, i))
                continue;
            store.push(s.substring(idx, i+1));
            helper(s, ans, i+1, store);
            store.pop();
        }
        return;
    }
    helper(s, ans, 0, new Array());
    return ans;
};

function validPalindrome(str, leftIdx, rightIdx){
    
    while(leftIdx <= rightIdx){
        if(str[leftIdx] != str[rightIdx])
            return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}