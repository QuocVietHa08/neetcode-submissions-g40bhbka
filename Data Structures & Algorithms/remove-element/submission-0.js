class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const result = nums.filter((item) => item !== val)
        for (let i = 0; i < result.length; i++) {
            nums[i] = result[i];
        }
        return result.length
    }
}
