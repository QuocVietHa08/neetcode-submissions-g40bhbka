class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      
        let i = 0
        while (i < s.length) {
            if (s[i] == '[' && s[i+1] == ']') {
                s = s.replace('[]', '');
                i = -1;
            } else if (s[i] == '{' && s[i+1] == '}') {
                s = s.replace('{}', '');
                i = -1;
            } else if (s[i] == '(' && s[i+1] == ')') {
                s = s.replace('()', '');
                i = -1;
            }
            i++;
        }

        return s.length == 0;
    }
}

