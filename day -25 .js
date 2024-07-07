// leetcode - 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

var permute = function(nums) {
    let res = [];
    getP(nums, 0);
    function getP(array, index) {
        for (let i = index; i < array.length; i++) {
            let swappedNum = [...array];
            swap(swappedNum, index, i);
            if (index == array.length - 1) {
                res.push(array);
            } else {
                getP(swappedNum, index + 1);
            }
        }
    }

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return res;
    
};