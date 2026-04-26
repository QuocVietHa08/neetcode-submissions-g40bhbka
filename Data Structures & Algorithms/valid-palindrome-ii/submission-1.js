class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
       const isPalindrome = (str, l, r) => {
           while (l < r) {
               if (str[l] !== str[r]) return false;
               l++; r--;
           }
           return true;
       }

       let l = 0;
       let r = s.length-1;
       while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        } else {
            l++;
            r--;
        }
       }
       return true
    }
}
