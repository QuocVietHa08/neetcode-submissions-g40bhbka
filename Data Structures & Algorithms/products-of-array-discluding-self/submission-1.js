class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // prefix and post fix
        // there will be 2 loop
        // first loop with return arry [1,1,2,8]
        // second loop return array [48, 24, 12, 8]
        // how to create prefix and postfix
        // start at 1 
        let start = 1;
        let result = [];
        for (let i = 0; i < nums.length;i++) {
            result[i] = start;
            start = start * nums[i]
        }
        console.log(result)
        let end = 1;
        for (let j = nums.length -1; j >= 0; j--) {
            result[j] = result[j] * end; 
            end = end * nums[j]
        }

        console.log(result)
        return result;
    }
}
