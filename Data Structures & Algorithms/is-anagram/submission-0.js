class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 2 string is anagram because the contains the exact same char
        // first solution: split, sort, join and compare
        let str1 = s.split('').sort().join()
        let str2 = t.split('').sort().join()
        console.log(str1, str2)
        return str1 == str2
    }
}
