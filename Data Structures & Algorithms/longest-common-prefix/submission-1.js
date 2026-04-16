class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = strs[0]
        for (let i = 1; i < strs.length;i++) {
            while (!strs[i].includes(result)) {
                result = result.slice(0, -1)
            }
        }

        return result;
    }
}
