//283. Move Zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.
var moveZeroes = function(nums) {
    let left = 0;
    for(let right = 0;right<nums.length;right++){
      if(nums[right] !==0){
          [nums[right] , nums[left]] = [nums[left],nums[right]]
          left++
      }
    }
    return nums;
  };