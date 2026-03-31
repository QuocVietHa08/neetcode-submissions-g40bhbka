class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // hashMap: because they return the index so we we have to store the index
        // we will have a hashMap to store all the target and the index of if
        // return [i, map[target]]
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            let res = target - nums[i];
            console.log('res->', res, map[res])
            if (map[res] !== undefined) return [i, map[res]]
            else map[nums[i]] = i
            console.log(map, res)
        }

        return []
    }
}
