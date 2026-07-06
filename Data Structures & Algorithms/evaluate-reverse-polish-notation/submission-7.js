class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const arr = [];
        for(let token of tokens) {
            if(token === '+') {
                arr.push(arr.pop() + arr.pop());
            }else if (token === '*') {
                arr.push(arr.pop() * arr.pop());
            }else if(token === '-') {
                const [a, b] = [arr.pop(), arr.pop()];
                arr.push(b - a);
            }else if(token === '/') {
                 const [a, b] = [arr.pop(), arr.pop()];
                arr.push(Math.trunc(b /     a));
            }else {
                arr.push(parseInt(token));
            }
        }
        return arr.pop();
    }
}
