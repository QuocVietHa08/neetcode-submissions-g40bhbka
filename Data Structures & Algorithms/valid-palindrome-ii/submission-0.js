class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
       // how much number to delete n = 1;
       // create l and r pointer
       // if the value between l and r different and l +1 or r-1 value 
       // equal the needed one then n--;
       // n < 0 return false
       // else return false
       let n = 1;
       let l = 0;
       let r = s.length-1;
       while (l < r) {
        console.log(l, r, n)
        if (s[l] !== s[r] && n > 0) {
            if (s[l+1] == s[r]) l++;
            if (s[l] == s[r-1]) r--;
            n--;
        } else if (s[l] !== s[r] && n <= 0) {
            return false
        } else {
            l++;
            r--;
        }
       }
       return true
    }
}
