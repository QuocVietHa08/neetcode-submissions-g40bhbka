class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // stack last in first out
        // s = [] => array = ["[", "]"]
        // s = ([{}]) => array = [(,[,{,},],)]
        // stack = array.push, array.pop
        // turn the s from string to array
        // if array.length % 2 !== 0 return false
        // loop thought the array 
        // bruce force
        // create   
       while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
            s = s.replace('()', '');
            s = s.replace('{}', '');
            s = s.replace('[]', '');
        }
        return s === '';

    }
}
