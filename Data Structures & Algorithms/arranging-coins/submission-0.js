class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        // we have n coins and we have to build a stair case.
        // first row will be: 1:
        // second row will be: 2
        // third row will be: 3
        // four row will be: 4
        // fifth row will be: 5
        // .... -> return the complete row base on the n coint
        // n + 0 / 2 = x then calculate with x is how many coin that need to handle 
        // example we have 4 rows will need 
        let l = 0;
        let r = n;
        let ans = 0
        while (l <= r) {
            let mid = Math.floor((l + r)/2);
            let totalNeed = (mid * (mid+1))/2
            if (totalNeed <= n) {
                ans = mid;
                l = mid +1;
            } else {
                r = mid -1
            }
        }

        return ans
    }
}
