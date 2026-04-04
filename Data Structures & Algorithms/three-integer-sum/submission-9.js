class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // using loop with two pointer 
        // sort the array first and loop throught the array with item
        // return set of number that count down into 0
        nums = (nums || [])?.sort((a, b) => a - b)
        console.log(nums);
        const result = []
        for (let i = 0; i < nums.length - 1; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue
            if (nums[i] > 0) break;

            let l = i+1, r = nums.length-1;
            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r];
                console.log(sum)
                if (sum > 0) {
                    r--
                } else if (sum < 0) {
                    l++
                } else if (sum == 0) {
                    result.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l-1]) l++;
                }
            }

            console.log(result)
        }
        return result
    }
}
