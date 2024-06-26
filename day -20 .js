// leetcode 378 - Kth Smallest Element in a Sorted Matrix
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2)

var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1] +1;
    while(lo<hi){
        let mid = lo+Math.floor((hi-lo)/2)
        let count = 0;
        for(let i = 0;i<matrix.length;i++){
            for(let j =0;j<matrix.length;j++){
                if(matrix[i][j]<=mid) count++
                else break
            }
        }
        if(count < k) lo = mid+1
        else hi = mid
    }
    return lo
};