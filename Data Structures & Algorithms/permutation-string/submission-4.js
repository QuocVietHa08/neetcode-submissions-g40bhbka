class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // two pointer, hashmap, sliding windowns
        // sliding windows with l,r start at 0 index
        // convert the s1 to hashMap
        // use that hashMap to the loop throught the item in the s2
        // if in the string at l to s clear all the 
        // but when do we stop the loop, that is when the r-l = s1.length
        let map = {};
        for (let i = 0; i < s1.length;i++) {
            map[s1[i]] = (map[s1[i]] || 0) +1;
        }
        
        let l = 0, r = 0;
        while (r < s2.length) {
            if (map[s2[r]] > 0) {
                map[s2[r]]--;
                r++;
                if ((r - l) == s1.length) return true;
            } else if (l < r) {
                map[s2[l]]++;
                l++;
            } else {
                l++;
                r++;
            }

        }

        return false
    }
}

