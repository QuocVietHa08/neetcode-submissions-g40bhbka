class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // using hashmap or object, convert all the string to a sorted item
        // return the hashmap value with [...map.values()]
        // hashmap use the has and set, get
        let map = new Map()
        for (let i = 0; i < strs.length; i++) {
            let sortString = this.convertToSortString(strs[i])
            console.log(sortString, map);
            if (!map.has(sortString))map.set(sortString, [strs[i]])
            else {
                map.set(sortString, [...map.get(sortString), strs[i]])
            }
        }

        console.log(map)
        return [...map.values()]
    }

    convertToSortString(s){
        return s.split('').sort().join('')
    }
}
