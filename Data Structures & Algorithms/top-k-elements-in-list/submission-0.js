class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map();
        let ans = [];
        for(let num of nums) {
            if(!freq.has(num)) {
                freq.set(num, 1);
            }else {
                freq.set(num, freq.get(num) + 1);
            }
        }
        freq = [...new Map([...freq.entries()].sort((a, b) => b[1] - a[1])).entries()];
        while(k--) {
            ans.push(freq.shift()[0]);
        }
        return ans;
    }
}
