class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let maxLen = 0;
        for(let i = 0; i < nums.length; ++i) {
            let len = 0;
            if(!numSet.has(nums[i] - 1)) {
                len++;
                let val = nums[i];
                while(numSet.has(val + 1)) {
                    len++;
                    val++;
                }
                maxLen = Math.max(len, maxLen);
            }
        }

        return maxLen;
    }
}

/* {0,3,2,5,4,6,1}
len = 1 + 1 + 1 + 1 + 1 + 1 + 1
maxLen = max(len, maxLen);
[0,3,2,5,4,6,1,1]
*/


