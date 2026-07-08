class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProduct = [nums[0]];
        const rightProduct = [];

        for(let i = 1; i < nums.length; ++i) {
            leftProduct[i] = leftProduct[i - 1] * nums[i];
        }

        for(let i = nums.length - 1; i >= 0; --i) {
            if(i === nums.length - 1) {
                rightProduct[i] = nums[i];
                continue;
            }
            rightProduct[i] = rightProduct[i + 1] * nums[i];
        }

        const ans = [];
        
        for(let i = 0; i < nums.length; ++i) {
            if(i === 0) {
                ans[i] = rightProduct[i+1]
            }else if(i === nums.length - 1) {
                ans[i] = leftProduct[i-1];
            }else {
                ans[i] = leftProduct[i-1] * rightProduct[i+1]
            }
        }

        return ans;
    }
}
