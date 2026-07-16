class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        function binarySearch(nums) {
            let low = 0, high = nums.length - 1;
            while(low <= high) {
                let mid = (low + high) >>> 1;
                if(nums[mid] === target) return true;
                if(nums[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            return false;
        }

        let low = 0, high = matrix.length - 1;
        while(low <= high) {
            let mid = (low + high) >>> 1;
            let arr = matrix[mid];
            if(target >= arr[0] && target <= arr[arr.length - 1]) {
                return binarySearch(arr);
            }else if(target > arr[arr.length - 1]) {
                low = mid + 1;
            }else {
                high = mid - 1;
            }
        }

        return false;
    }
}
