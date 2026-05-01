class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    largestUniqueNumber(nums) {
        // return the maxium number in the array that isn't repeated
        // there are a lot of way to handle this.
        // create an array that find item that only show 1 and return the max vlaue of that arrray
        let map = {}
        for (let i = 0; i < nums.length;i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }
        console.log(map)
        // 9:1
        let result = Object.keys(map).filter((item) => map[item] == 1)
        console.log(result)
        return result.length > 0 ? Math.max(...result) : -1
    }
}
