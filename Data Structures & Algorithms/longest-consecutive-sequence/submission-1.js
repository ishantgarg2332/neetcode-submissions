class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxLen = 0;
        for(let num of nums) {
            if(!numSet.has(num-1)) {
                let length = 0;
                while(numSet.has(num + length)) {
                    length += 1;
                }
                maxLen = Math.max(maxLen, length)
            }
        }
        return maxLen;       
    }
}
