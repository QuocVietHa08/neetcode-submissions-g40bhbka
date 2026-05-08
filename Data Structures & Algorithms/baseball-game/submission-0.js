class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let result = []
        for (let i = 0; i < operations.length;i++) {
            if (!isNaN(operations[i])) {
                result.push(Number(operations[i]))
            } else {
                if (operations[i] == '+') {
                    let value = result[result.length-1] + result[result.length-2]
                    result.push(value)
                }
                if (operations[i] == 'C') result.pop()
                if (operations[i] == 'D') {
                    let value = Number(result[result.length-1]) * 2
                    console.log(result)
                    console.log(value, result[i-1], result[i-2])
                    result.push(value)
                }
            }
        }

        console.log(result)
        let res = 0;
        for (let i = 0; i < result.length;i++) {
            res += result[i]
        }

        return res
    }
}
