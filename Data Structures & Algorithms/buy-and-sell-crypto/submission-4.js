class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // slibing windows
        let l = 0, r = 0;
        let result = 0;
        while (r < prices.length) {
            if (prices[l] > prices[r]) l = r
            else {
                let value = prices[r] - prices[l]
                result = Math.max(result, value)
            }
            r++;
            console.log(result)
        }
        return result

    }
}
