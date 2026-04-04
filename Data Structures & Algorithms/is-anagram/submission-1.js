class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // 2 string is anagram because the contains the exact same char
        // first solution: split, sort, join and compare
        // second solution using hashmap
        // store all the frequency char in a hashmap and loop through 2 string
        // minus the char by 1 when loop through the string
        // if they a char let in the map that have number fre > 0 return false
        // else return true
        let map = {}
        for (let char of s) {
            map[char] = (map[char] || 0) +1
        }
        for (let char of t) {
            map[char] = (map[char]||0) -1
        }

        return Object.keys(map).every((item) => map[item] == 0)
    }
}
