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
        if (!isNaN(tokens[i])) {
            arr.push(Number(tokens[i]))
        } else {
            let b = arr.pop();
            let a = arr.pop();
            if (tokens[i] == '+') {
                let value = a + b
                arr.push(value)
            } else if (tokens[i] == '-') {
                let value = a - b
                arr.push(value)
            } else if (tokens[i] == '*') {
                let value = a * b
                arr.push(value)
            } else if (tokens[i] == '/') {
                let value = Math.trunc(a / b)
                arr.push(value)
            }
        }

       } 

       return arr[0]
    }
}
