class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let arr = [];
        const pair = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        };
        for(let char of s) {
            if(char === '(' || char === '{' || char === "[") {
                arr.push(char);
            }else if(pair[char] !== arr.pop()) return false;
        }

        return arr.length === 0;
    }
}
