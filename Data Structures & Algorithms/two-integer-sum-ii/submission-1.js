class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0, j = nums.length - 1;
        while(i < j) {
            if(nums[i] + nums[j] === target) {
                return [i + 1, j + 1];
            }
            else if(nums[i] + nums[j] > target) {
                j--;
            } else {
                i++;
            }
        }
        return [];
    }
}
