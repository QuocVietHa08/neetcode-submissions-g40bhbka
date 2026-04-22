class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    anagramMappings(nums1, nums2) {
        let result = []
        for (let i = 0; i < nums1.length;i++) {
            const a = nums2.indexOf(nums1[i])
            console.log(a)
            result.push(a)
        }

        return result
    }
}
