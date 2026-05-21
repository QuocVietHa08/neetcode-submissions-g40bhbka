class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    countElements(arr) {
        // create a map if x + 1 exist in the array -> add a count 1 otherwise add count 0
        let count = 0;
        for (let i = 0; i < arr.length;i++) {
            let x = arr[i] + 1;
            let isExist = arr.findIndex((val) => val === x) >= 0 ? 1 : 0
            count += isExist
        }

        return count
    }
}
