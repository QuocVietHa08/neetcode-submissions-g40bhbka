class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // hashmap: store all the frequent number of each integer
        // return the most value by using the splice(0,k)

        let map = {}
        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }
        console.log(map)
        const result = Object.keys(map).sort((a, b) => map[b] - map[a])
        console.log(result);
        return result.splice(0, k)
        
    }
}
