class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // start with i and j 
        // nums[i] == nums[j] and Math.abs(i-j) <= k
        // put every item inside a hashmpa with array
        // loop throught item in the hasmap
        // if item has array value > 2 then caculate
        let map = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                if (Math.abs(i - map.get(nums[i])) <= k) {
                    return true;
                }
            }
            map.set(nums[i], i)
        }

        return false
    }
}
