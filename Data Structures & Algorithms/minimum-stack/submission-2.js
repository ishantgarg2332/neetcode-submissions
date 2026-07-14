class MinStack {
    constructor() {
        this.mins = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.mins.push(this.mins.length ? 
        Math.min(this.mins[this.mins.length - 1], val) : val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.mins.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.mins[this.mins.length - 1];
    }
}
