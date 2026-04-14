class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let n = s.length;
        let i = n-1;
        let length = 0;
        while(s.charAt(i) === ' ') i--
        while (i >= 0 && s.charAt(i) !== ' ') {
            // this condition will run only on the last word because
            // that case i >0 and charAt i position != empty
            i--;
            length++;
        }

        return length
    }
}
