class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // result [1, 4, 1,2,1,0,0]
        // at position 1, 30 it takes 1 day to have a value that > 30
        // at position 2, 38, it takes 4 days to ahve a value that > 38 it is value 40
        // at position 3, 30, it takes 1 days to have a vlaue that > 30, it is value 38
        // loop thought each item, has a another pointer to find how many day

        let result = [];
        for (let i = 0; i < temperatures.length; i++) {
            result[i] = 0;
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    result[i] = j - i;
                    break;
                }
            }
        }
        return result;
    }
}
