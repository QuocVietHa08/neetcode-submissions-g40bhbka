class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        // declare 2 pointer l,r
        // loop from the value s[i] with i = 0;
        // set the value l for the first character
        // compare to the l, r if r < l return false
        // return true
         const rec = (i, j) => {
            if (i === s.length) return true;
            if (j === t.length) return false;
            if (s[i] === t[j]) return rec(i + 1, j + 1);
            return rec(i, j + 1);
        };
        return rec(0, 0);
    }
}

