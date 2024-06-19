// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

function swap(nums , a ,b){
    let temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
    return nums;
}
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length-1;
 for(let mid=0;mid<=right;mid++){
        if(nums[mid]==0){
            swap(nums,left,mid)
            left++;
        }else if(nums[mid]==2){
            swap(nums ,right,mid)
            right--;
            mid--;
        }
    }
    return nums;
};