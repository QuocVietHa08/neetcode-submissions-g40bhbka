class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        // return the index if the target is found
        // if not return the index where it would be if it were inserted in order
        let l = 0;
        let r = nums.length-1;
        let result = 0;
        while (l < r) {
            let mid = Math.floor((l+r)/2);
            if (nums[mid] == target) {
                result = mid;
                break;
            } else if (nums[mid] > target) r = mid-1
            else l = mid +1;
        }

        return result ? result : l+1
    }
}
