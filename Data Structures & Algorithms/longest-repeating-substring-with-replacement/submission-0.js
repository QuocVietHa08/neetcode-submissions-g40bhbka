class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // convert the string
        // loop though each item in s
        // then create a pointer from i +1 position with value 
        // if s[i] != s[j] && k > 0 => j++, value++
        // else result = max(value, result)

        const arr = s.split('');
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            let j = i;
            let a = k;
            let value = 0;
            while (j < arr.length) {
                if (arr[i] !== arr[j] && a > 0) {
                    j++; value++, a--
                } else if (arr[i] === arr[j]) {
                    j++; value++
                } else {
                    break;
                }
            }
            // Handle remaining k at the end of the string
            result = Math.max(result, Math.min(arr.length, value + a));
        }

        return result
    }
}
