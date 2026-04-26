/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        // use biannyar search with l and r and mid
        // if mid = taget return 
        // else l = mid +1 or r = mid -1
        let l = 1;
        let r = n
        while (l <= r) {
            let mid = Math.floor((l+r)/2)
            if (guess(mid) === 0) return mid
            else if (guess(mid) === -1) r = mid-1
            else l = mid +1
        }
        return l
    }
}
