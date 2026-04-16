class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // binary search include left and right and mid
        let l = 0; 
        let r = nums.length-1
        let result = -1        
        while (l <= r) {
            let mid = Math.floor((l+r)/2)
            console.log(mid, l,r, nums[mid])
            if (nums[mid] == target) {
                result = mid
                break;
            }
            else if (nums[mid] > target) r = mid-1
            else l = mid+1
        }

        return result
    }
}
