// leetcode no - 209. Minimum Size Subarray Sum
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarraywhose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function(target, nums) {
    let l = 0;
    let total =0;
    let result = Infinity;
    for(let r =0;r<nums.length;r++){
        total += nums[r];
        while(total>=target){
            result=Math.min(r-l+1,result);
            total -= nums[l];
            l++;
        }       
    }
     return result === Infinity ? 0 : result;
};