class MinStack { 
    constructor() {
        this.array = []
        this.minArray = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.array.push(val)
        let min = this.minArray.length === 0 ? val : Math.min(val, this.getMin());
        this.minArray.push(min);
    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop()
        this.minArray.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArray[this.minArray.length - 1]
    }
}
