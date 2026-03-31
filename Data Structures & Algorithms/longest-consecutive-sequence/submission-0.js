class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let result = 0;
        console.log(set)
        for (let i = 0; i < nums.length; i++) {
            let a = 0;
            while (set.has(nums[i] + a)) {
                a++
            }
            console.log(a, nums[i], result)
            result = Math.max(a, result)
        }

        return result

    }
}
