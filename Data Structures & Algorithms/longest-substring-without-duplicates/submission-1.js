class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0, j = 0
        let maxLen = 0;
        let set = new Set();
        while(j < s.length) {
            if(!set.has(s[j])) {
                set.add(s[j]);
                j++;
                maxLen = Math.max(maxLen, set.size);
            } else {
                set.delete(s[i]);
                i++;
            } 
        }
        return maxLen;
    }
}
