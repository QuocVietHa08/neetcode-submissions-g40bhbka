class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       // give an empty array with an result
       // go through each item in the array.
       let result = 0;
       let arr = []
       for (let i = 0; i < tokens.length;i++) {
        if (Number(tokens[i])) {
            arr.push(Number(tokens[i]))
        } else {
            if (tokens[i] == '+') {
                let value = arr[0] + arr[1]
                arr = [value]
            } else if (tokens[i] == '-') {
                let value = arr[0] - arr[1]
                arr = [value]
            } else if (tokens[i] == '*') {
                let value = arr[0] * arr[1]
                arr = [value]
            } else if (tokens[i] == '/') {
                let value = arr[0] / arr[1]
                arr = [value]
            }
        }

        console.log(arr)
       } 

       return arr[0]
    }
}
