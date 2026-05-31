class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0, j = 0;
        while (i < word.length && j < abbr.length) {
            if (abbr[j] == '0') return false;
            if (isNaN(abbr[j])) {
                if (word[i] !== abbr[j]) return false;
                i++;
                j++;
            } else {
                let num = 0;
                while (j < abbr.length && !isNaN(abbr[j])) {
                    num = num * 10 + parseInt(abbr[j]);
                    j++
                }
                i += num;
            }
        }
        return i === word.length && j == abbr.length
    }
}
