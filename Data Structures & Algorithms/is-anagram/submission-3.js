class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // we can use hashmap, to calculate the the number of item 
        // then we use that hash map loop through the second item if and minus 
        // the value that i occurs
        // if the value of all character is = 0
        // return true, else return false
        
        // second solution: 1 compare lenght if different length return false
        // split and sort 2 string and compare it
        let s1 = s.split('').sort().join('')
        let t1 = t.split('').sort().join('')
        console.log(s1, t1)
        return s1 === t1;
    }
}
