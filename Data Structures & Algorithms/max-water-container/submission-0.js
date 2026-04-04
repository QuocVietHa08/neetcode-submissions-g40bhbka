class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // two pointer, loop thought each item using for and have an item as j
        // loop through each combinatin and return the maxium value
        // the maxium value = w * h
        // w = r-l
        // h = min(heights[j], heights[i])

        let result = 0;
        let l = 0, r = heights.length -1;
        while (l < r) {
            let value = (r-l) * Math.min(heights[l], heights[r])
            result = Math.max(value, result)
            console.log(value, result)
            if (heights[l] < heights[r]) l++
            else r--
        }

        return result
    }
}
