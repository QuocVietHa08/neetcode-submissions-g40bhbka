class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        // so a word is valid when there are 2 condition
        // word[i] == combination of the each word at position i
        // for example words[0] = combination of word[i][0]
        // for example words[1] = combination of word[i][1]
        // might need 2 loop
        // loop through each word. Each word have to build combination string
        for (let i = 0; i < words.length;i++) {
            let value = ''
            for (let j = 0; j < words.length; j++) {
                value += (words[j][i] || '')
            }

            console.log(value)
            if (value !== words[i]) return false
        }

        return true
    }
}
