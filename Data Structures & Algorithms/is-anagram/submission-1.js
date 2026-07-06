class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const hashS = Array(26).fill(0);
        const hashT = Array(26).fill(0);

        for(let c of s) {
            hashS[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for(let c of t) {
            hashT[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for(let i = 0; i < 26; ++i) {
            if(hashS[i] !== hashT[i]) return false;
        }

        return true;

    }
}
