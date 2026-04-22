class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        let map = {}
        for (let i = 0; i < nums2.length;i++) {
            map[nums[i]] = i
        }

        let result = []
        for (let i = 0; i < nums1[i]; i++) {
            let a = map[nums1[i]];
            result.push(a)
        }

        return result
    }
}
