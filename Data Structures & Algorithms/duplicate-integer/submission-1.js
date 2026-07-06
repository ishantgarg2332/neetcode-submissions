class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numSet = new Set(nums);

        if(numSet.size < nums.length) return true;

        return false;
    }
}
