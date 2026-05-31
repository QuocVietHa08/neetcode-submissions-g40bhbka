class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // give 2 array nums1, and nums2 we need to modify and return nums1 array.
        // nums1 will have length equal to m +n
        // solution: file invalid item and replace with number in nums2 then sort the array
        let i = m;
        let j = 0
        while (i < nums1.length) {
            nums1[i] = nums2[j];
            j++;
            i++;
        }

        console.log(nums1)
        return nums1.sort((a, b) => a-b)

    }
}
