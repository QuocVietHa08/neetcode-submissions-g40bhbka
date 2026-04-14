class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        // so a word is valid when there are 2 condition
        // the first word length == words.length
        // and the combination of the first string in each words = words[0]
        // else return false
        if (words[0].length !== words.length) return false
        let value = ''
        for (let i = 0; i < words.length;i ++) {
            value += words[i][0]
        }

        console.log(value)
        return value === words[0]
    }
}
