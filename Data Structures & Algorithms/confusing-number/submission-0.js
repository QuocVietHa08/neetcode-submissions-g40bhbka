class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        n = String(n);
        console.log(typeof n)
        if (n.includes('2') || n.includes('3') || n.includes('4') || n.includes('5') || n.includes('7')) {
            return false
        }
        return true
    }
}
