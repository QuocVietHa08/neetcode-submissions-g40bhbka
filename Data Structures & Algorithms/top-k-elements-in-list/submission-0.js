class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // return the most fequently element in array
        // we can use hashmap  
        // store the most fequently element in hashmap or object iwth the value
        // return the most value
        let map = {}
        for (let num of nums) {
            map[num] = (map[num] || 0) +1;
        }

        console.log(map);
        const a = Object.keys(map).sort((a, b) => map[b] - map[a])
        console.log(a)
        return a.slice(0, k)
    }
}
