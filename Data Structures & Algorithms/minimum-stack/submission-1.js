class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.min = Math.min(this.min, val);
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();
        this.min = Math.min(...this.stack);
        return val;
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
        return this.min;
    }
}
