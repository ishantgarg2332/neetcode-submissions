class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function binarySearch(l, h) {
            if(l > h) return -1;
            let mid = (l + h) >>> 1;
            if(nums[mid] === target) return mid;
            if(nums[mid] < target) {
                return binarySearch(mid + 1, h);
            } else {
                return binarySearch(l, mid - 1);
            }
        }

        let low = 0, high = nums.length - 1;
        while(low < high) {
            let mid = (low + high) >>> 1;
            if(nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        const left = binarySearch(0, low - 1);
        const right = binarySearch(low, nums.length - 1);
        
        if(left !== -1) return left;
        return right;
    }
}
