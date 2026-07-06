class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function binarySearch(start, end) {
            if(end < start) return -1;
            const mid = start + Math.floor((end - start) / 2);
            if(nums[mid] === target) return mid;
            if(nums[mid] > target) return binarySearch(start, mid - 1);
            if(nums[mid] < target) return binarySearch(mid + 1, end);
        }
        return binarySearch(0, nums.length - 1);
    }
}
