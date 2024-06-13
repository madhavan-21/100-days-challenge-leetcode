//leetcode 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function(nums) {
    let n = nums.length
    // create two varaiable and one result array
    let pre = 1;
    let post = 1;
    let result = new Array(n);
    //fill the result array with 1
    for(let i = 0;i<n;i++){
        result[i] =1;
    } 
    //make prefix
    for(let i = 0;i<n;i++){
        result[i] *= pre
        pre *= nums[i];
    }

    //make postfix 
    for(let i = n-1;i>=0;i--){
        result[i] *= post
        post *=nums[i]
    }
return result

};