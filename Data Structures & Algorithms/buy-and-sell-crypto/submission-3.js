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
        let l = 0, r = 1;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let value = prices[r] - prices[l];
                profit = Math.max(profit, value);
            } else {
                l = r;
            }
            r++;
        }

        return profit;
    }
}
