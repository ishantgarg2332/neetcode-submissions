class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let i = 0, j = s1.length - 1;
        let charCodeS1 = Array(26).fill(0);
        for(let c of s1) {
            charCodeS1[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        while(j < s2.length) {
            let str = s2.substring(i, j + 1);
            let charCodesStr = Array(26).fill(0);
            
            for(let c of str) {
                charCodesStr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }  
            for(let k = 0; k < 26; ++k) {
                if(charCodeS1[k] !== charCodesStr[k]) break;
                if(k === 25 && charCodeS1[k] === charCodesStr[k]) return true;
            }
            ++i;
            ++j;
        }
        return false;
    }
}
