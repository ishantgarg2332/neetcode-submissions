class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let i = 0, j = height.length - 1;
        let maxL = height[i];
        let maxR = height[j];
        let ans = 0;
        while(i < j) {
            if(maxL < maxR) {
                i++;
                maxL = Math.max(maxL, height[i]); 
                ans += maxL - height[i];
            }else {
                j--;
                maxR = Math.max(maxR, height[j]);
                ans += maxR - height[j];
            }
        }
        return ans;
    }
}
