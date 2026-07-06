class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = [];
        const stack = [];
        for(let i = 0; i < position.length; ++i) {
            pairs.push([position[i], speed[i]]);
        }
        pairs.sort((a, b) => b[0] - a[0]);

        for(let pair of pairs) {
            stack.push((target - pair[0]) / pair[1]);
            const stackLen = stack.length;
            if(stack.length >= 2 && stack[stackLen - 1] <= stack[stackLen - 2]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
