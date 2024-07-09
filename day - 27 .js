//leetcode problem - 40. Combination Sum II

var combinationSum2 = function(candidates, target) {
    function helper (position, sum, subset, answer) {
        if (sum==target) {
			answer.push([...subset])
            return;
        }
		if (position >= candidates.length) {
            return;
        }
        if (sum > target) {
            return;
        }
		subset.push(candidates[position])
        sum += candidates[position]
		helper(position + 1, sum, subset, answer)
        
        subset.pop()
        sum -= candidates[position]
        while (position + 1 < candidates.length && candidates[position] == candidates[position + 1]) {
            position += 1
        }
		helper(position+1, sum, subset, answer)
    }

    const answer = []
    candidates.sort((number1, number2) => number1 - number2)
    helper(0, 0, [], answer)
    return answer
};