class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        function binarySearch(start, end, arr) {
            if(end < start) return false;
            const mid = start + Math.floor((end - start) / 2);
            if(arr[mid] === target) return true;
            if(arr[mid] < target) return binarySearch(mid + 1, end, arr);
            if(arr[mid] > target) return binarySearch(start, mid - 1, arr);
        }

        const rows = matrix.length;
        const arr = [];
        for(let i = 0; i < rows; ++i) {
            arr.push(...matrix[i]);
        }
        return binarySearch(0, arr.length - 1, arr);
    }
}
