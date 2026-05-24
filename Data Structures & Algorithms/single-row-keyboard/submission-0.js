class Solution {
    /**
     * @param {string} keyboard
     * @param {string} word
     * @return {number}
     */
    calculateTime(keyboard, word) {
        // create a hashmap with the index of each item
        // we will have sum = 0 and an variable index start at = 0
        // loop throught each item in the word the find the index of each word
        // then combined it with the sum
        // for example, index start at 0 and the first text is n
        // index has to move from 0 to 24 -> sum += abs(0-24), index = 24
        // index has to move from 24 to 15 -> sum += abs(15-24), index = 15
        let map = {}
        for (let i = 0; i < keyboard.length;i++) {
            map[keyboard[i]] = i
        }
        console.log(map)
        let index = 0;
        let sum = 0;
        for (let i = 0; i < word.length;i++) {
            let value = map[word[i]]
            console.log(value, index)
            sum += Math.abs(value - index)
            index = value
        }
        return sum


    }
}
