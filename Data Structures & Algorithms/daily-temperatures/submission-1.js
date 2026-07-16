class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = Array(temperatures.length).fill(0);
        let stack = [];
        for(let i = 0; i < temperatures.length; ++i) {
            while(stack.length && temperatures[i] > stack[stack.length - 1][0]) {
                const [_, idx] = stack.pop();
                result[idx] = i - idx;
            }
            stack.push([temperatures[i], i]);
        }
        return result;
    }
}
