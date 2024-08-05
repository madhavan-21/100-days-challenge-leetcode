class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        // Use a hashmap to store the counts of each element in nums1
        Map<Integer, Integer> counts = new HashMap<>();
        for (int num : nums1) {
            counts.put(num, counts.getOrDefault(num, 0) + 1);
        }

        // Use a list to store the intersection elements
        List<Integer> intersection = new ArrayList<>();
        for (int num : nums2) {
            if (counts.containsKey(num) && counts.get(num) > 0) {
                intersection.add(num);
                counts.put(num, counts.get(num) - 1);
            }
        }

        // Convert the list to an array
        int[] result = new int[intersection.size()];
        for (int i = 0; i < intersection.size(); i++) {
            result[i] = intersection.get(i);
        }

        return result;
    }
}