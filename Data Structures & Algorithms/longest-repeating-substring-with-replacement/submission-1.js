class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {};
        let res = 0;
        let i = 0;
        for(let j = 0; j < s.length; ++j) {
            count[s[j]] = 1 + (count[s[j]] || 0);
            while((j - i + 1) - Math.max(...Object.values(count)) > k) {
                count[s[i]]--;
                ++i;
            }
            res = Math.max(res, j - i + 1);
        }
        return res;
    }
}
