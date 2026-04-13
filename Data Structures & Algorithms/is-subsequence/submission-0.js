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
        let l = 0, r = 1;
        for (let i = 0; i < s.length;i++) {
            let value = t.indexOf(s[i], l);
            if (value < 0) return false

                l = value + 1;
                r = value
        }

        return true
    }
}

