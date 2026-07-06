class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const ans = [];
        const stack = [];
        function backTrack(open, closed) {
            if(open === n && closed === n) {
                ans.push(stack.join(""));
                return;
            }
            if(open < n) {
                stack.push("(");
                backTrack(open + 1, closed);
                stack.pop();
            }
            if(closed < open) {
                stack.push(")");
                backTrack(open, closed + 1);
                stack.pop();
            }
        }
        backTrack(0, 0);
        return ans;
    }
}
