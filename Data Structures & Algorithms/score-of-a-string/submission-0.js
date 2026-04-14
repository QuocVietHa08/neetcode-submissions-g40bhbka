class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        // result = charCodeAt i - charCodeAt i-1 
        let result = 0;
        for (let i = 1; i < s.length; i++) {
            console.log(s.charCodeAt(i))
            console.log()
            result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1))
        }
        return result
    }
}
