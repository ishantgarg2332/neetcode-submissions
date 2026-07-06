class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0, j = 0;
        let max = 0;
        let map = new Set();
        while(j < s.length) {
            if(!map.has(s[j])) {
                map.add(s[j]);
                ++j;
                max = Math.max(max, map.size);
            }else {
                map.delete(s[i]);
                ++i;
            }
        }
        return max;
    }
}
