class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // burce force 2 loop
        // hashmap
        let map = {}
        for (let i = 0; i < nums.length ;i++) {
            let a = target - nums[i];
            console.log(a, map)
            if (map[a] != null) return [i, map[a]]
            else {
                map[nums[i]] = i
            }
        }

        return []
    }
}
