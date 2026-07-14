class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let ops = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b)
        };
        for(let token of tokens) {
            if(token in ops) {
                const [right, left] = [stack.pop(), stack.pop()];
                stack.push(ops[token](left, right));
            } else {
                stack.push(+token);
            }
        }

        return stack.pop();
    }
}
