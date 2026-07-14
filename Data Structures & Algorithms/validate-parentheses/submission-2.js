class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const closing = {
            ']': '[',
            '}': '{',
            ')': '('
        };
        const opening = new Set(['{', '(', '[']);

        for(let c of s) {
            if(opening.has(c)) {
                stack.push(c);
            } else {
                const top = stack.pop();
                if(top !== closing[c]) return false;
            }
        }

        return stack.length === 0
    }
}
[]
