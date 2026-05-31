class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        // word1 and word2 and resutl will be words[i] + word2[i]
        // return value
        // need a variable as pointer check which word lenght is bigger and coupone the result.

        let length = word1.length > word2.length ? word1.length : word2.length;
        let result = ''
        for (let i = 0; i < length;i++) {
            if (word1[i]) result += word1[i]
            if (word2[i]) result += word2[i]
        }
        return result
    }
}
