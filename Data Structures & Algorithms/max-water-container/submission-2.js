class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // using 2 pointer left and right with a max value
        // calculate the value in each step and compare the max value to get the max result
        // return the maxValue
        let l = 0;
        let r = heights.length-1;
        let max = 0;
        while (l < r) {
            let result = (r-l) * (Math.min(heights[l], heights[r]));
            max = Math.max(max, result);
            console.log(l, r, result)
            if (heights[l] > heights[r]) r--
            else l++
        }

        return max
    }
}
