class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // this is two pointer problem
        // the one the left and the one right
        // l < r and nums[l] < nums[r] => sum = nums[r] = nums[l]
    
        let profit = 0;
        let l = 0, r = prices.length -1;

        while (l < r) {
            let value = prices[r] - prices[l];
            if (prices[l] > prices[r]) {
                l++;
            } else {
                r--
            }
            profit = Math.max(profit, value)
        }

        return profit;
    }
}
