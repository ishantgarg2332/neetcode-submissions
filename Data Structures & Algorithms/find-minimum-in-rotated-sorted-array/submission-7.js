class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0, high = nums.length - 1;
        while(low < high) {
            let mid = (low + high) >>> 1;
            if(nums[mid] > nums[high]) {
                low = mid + 1;
            }else {
                high = mid;
            }
        }

        return nums[low];
    }
}
