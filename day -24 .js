var subsets = function (nums) {
    var result = [];
    var currentSubset = [];

    const generateSubset = (begin) => {
        result.push([...currentSubset]);
        for (let end = begin; end < nums.length; end++) {
            currentSubset.push(nums[end]);
            generateSubset(end + 1);
            currentSubset.pop();
        }
    }

    generateSubset(0);
    return result;
};