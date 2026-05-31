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
        let i = m-1;
        let j = n-1;
        let x = m + n -1;
        console.log(x)
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[x] = nums1[i];
                i--
            } else {
                nums1[x] = nums2[j];
                j--;
            }
            x--
        }
        return nums1

    }
}
