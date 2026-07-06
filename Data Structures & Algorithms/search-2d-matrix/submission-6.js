class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length, COLS = matrix[0].length;

        let top = 0,  bot = ROWS - 1;

        while (top <= bot){
            const row = Math.floor((top + bot) / 2);
            if(target > matrix[row][matrix[row].length - 1]) {
                top = row + 1;
            }else if(target < matrix[row][0]) {
                bot = row - 1;
            }else {
                break;
            }
        }
        if(!(top <= bot)) {
            return false;
        }

        const row = Math.floor((top + bot) / 2);
        let l = 0, r = COLS - 1;

        while(l <= r) {
            const mid = Math.floor((l + r) / 2);
            if(target > matrix[row][mid]) {
                l = mid + 1;
            }else if(target < matrix[row][mid]) {
                r = mid - 1;
            }else {
               return true; 
            }
        }
    return false;

    }

}
