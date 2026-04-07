class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // using hashmap
        // create a sorted hashmap with the key is sort value and the value in array of item
        // return the item in array position
        let map = new Map();
        for (let i = 0; i < strs.length; i++) {
            let sortedStr = strs[i].split('').sort().join('')
            if (!map.has(sortedStr)) {
                map.set(sortedStr, [strs[i]])
            } else {
                map.set(sortedStr, [...map.get(sortedStr), strs[i]])
            }
        }

        // convert from the Map to array
        const a = [...map.values()]
        return a
    }
}
