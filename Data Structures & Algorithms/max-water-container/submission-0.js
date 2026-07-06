class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1, ans = 0;
        while(i < j) {
            let area = Math.min(heights[i], heights[j]) * Math.abs(i - j);
            ans = Math.max(area, ans);
            if(heights[i] < heights[j]) {
                i++;
            }else {
                j--;
            }
        }
        return ans;
    }
}
