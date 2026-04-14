class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const a = s.trim().split(' ')
        console.log(s.trim())

        console.log(a)
        return a[a.length-1].length
    }
}
