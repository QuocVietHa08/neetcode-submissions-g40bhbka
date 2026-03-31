class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a -b );
        console.log(nums)
        let result = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue;
            let l = i+1, r = nums.length -1;
            while (l < r) {
                let target = nums[i] + nums[l] + nums[r];
                if (target == 0) {
                    result.push([nums[i], nums[l], nums[r]])
                    l++; r--;
                    while (l < r && nums[l] === nums[l-1]) {
                        l++;
                    }
                } else if (target < 0) l++
                else r--
            }
        }
        return result
    }
}
