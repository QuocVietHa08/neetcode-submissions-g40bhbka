class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // s = zxyzyxz value 3 zyx
        // init a set value and loop thougt each item in the s
        // if the item doesn't exsit in the set -> add to the set and increase the max
        // if the item exist in the set -> clear the set and compare the max with the result
        // return the result
         let res = 0;
        for (let i = 0; i < s.length; i++) {
            let charSet = new Set();
            for (let j = i; j < s.length; j++) {
                if (charSet.has(s[j])) {
                    break;
                }
                charSet.add(s[j]);
            }
            res = Math.max(res, charSet.size);
        }
        return res;
    }
}
