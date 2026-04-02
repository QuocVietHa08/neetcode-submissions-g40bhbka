class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // O(log n) -> binary search
        // left and right with mid = left + right /2

        let left = 0;
        let right = nums.length - 1
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            console.log(left, right, mid)
            if (nums[mid] < nums[right]) right = mid
            if (nums[mid] > nums[right]) left = mid + 1
        }

        return nums[left];
    }
}
