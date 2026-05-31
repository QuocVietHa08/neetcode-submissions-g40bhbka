class Solution {
    /**
     * @param {string} s
     * @param {number[][]} shift
     * @return {string}
     */
    stringShift(s, shift) {
        // Count the number of left shifts. A right shift is a negative left shift.
        let leftShifts = 0;

        for (let move of shift) {
            if (move[0] === 1) {
                move[1] = -move[1];
            }
            leftShifts += move[1];
        }

        // Convert back to a positive, do left shifts, and return.
        leftShifts = ((leftShifts % s.length) + s.length) % s.length;
        s = s.substring(leftShifts) + s.substring(0, leftShifts);
        return s;
    }
}