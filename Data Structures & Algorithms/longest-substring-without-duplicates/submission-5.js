class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sliding windows
        let l =0 , r = 0;
        let max = 1;
        let set = new Set();
        set.add(s[l]);
        
        while (r < s.length) {
            if (!set.has(s[r])) {
                set.add(s[r]);
                max = Math.max(set.size, max)
            } else {
                l = r;
                set.clear();
                set.add(s[r])
            }
            r++;
            console.log(max)
        }

        return max
    }
}
