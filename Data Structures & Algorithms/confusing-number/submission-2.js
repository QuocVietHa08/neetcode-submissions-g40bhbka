class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    confusingNumber(n) {
        const originalStr = String(n);
        if (originalStr.includes('2') || originalStr.includes('3') || originalStr.includes('4') || originalStr.includes('5') || originalStr.includes('7')) {
            return false
        }
        
        const map = { '0': '0', '1': '1', '6': '9', '8': '8', '9': '6' };
        let rotated = "";
        for (let i = originalStr.length - 1; i >= 0; i--) {
            rotated += map[originalStr[i]];
        }
        
        return parseInt(rotated) !== n;
    }
}
