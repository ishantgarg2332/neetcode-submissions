class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let maxVol = 0;
        while(i < j) {
            let currVol = Math.min(heights[i], heights[j]) * Math.abs(j - i);
            maxVol = Math.max(maxVol, currVol);
            if(heights[i] < heights[j]) {
                i++;
            }else {
                j--;
            }
        }

        return maxVol;
    }
}
