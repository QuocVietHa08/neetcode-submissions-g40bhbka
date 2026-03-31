class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // return the output but not the index -> need to remove duplicate and can sort the 
        // 3 loop 
        // 2 loop, 1 loop start from the i -> nums.length, another loop we use 2 pointer
        // if nums[a] + nums[i] + nums[j] === 0 return
        // if nums[i] = nums[i-1] i++
        // if nums[a] = nums[a-1] continue
        // [-4, -1-1, 0,1, 2] => [-1-12, -101]
        //   i,  l.         r => -4 + -1 +2 = -3, l++
        //    i,       l.   r.  => -4,+0 +2 = 2
        //       i. j       r
         nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
