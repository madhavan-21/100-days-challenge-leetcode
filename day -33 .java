//2367. Number of Arithmetic Triplets

class Solution {
    public int arithmeticTriplets(int[] nums, int diff) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int num: nums) {
            if (map.containsKey(num)) {
			    // the current number forms an arithmetic sequence with some previous number
				// increment the length of this sequence and update the starting point
                map.put(num + diff, map.get(num) + 1);
                map.remove(num);
            } else {
			    // start a new arithmetic sequence, storing the next number we expect to see
                map.put(num + diff, 1);
            }
        }
		
		// count the total number of arithmetic tuples from all the arithmetic sequences found
        int res = 0;
        for (int key: map.keySet()) {
            res += Math.max(0, map.get(key) - 3 + 1);
        }
        return res;
    }
}