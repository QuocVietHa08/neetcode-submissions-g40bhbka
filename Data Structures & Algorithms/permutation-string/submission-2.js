class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // substring cab is a premutation of abc and it present in lecabee
        // find all the premutation of a word and use string contain
        // sort s1 and sort s2 then check the substring
        let sort1 = s1.split('').sort().join('')
        for (let i = 0; i < s2.length; i++) {
            let j = i + s1.length;
            let subString = s2.slice(i, j)
            subString = subString.split('').sort().join('')
            if (subString == sort1) return true
        }

        return false
    }
}
