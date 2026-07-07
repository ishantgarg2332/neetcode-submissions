class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for(let str of strs) {
            encodedStr += (str.length + '#') + str
        }
        return encodedStr;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrings = [];
        for(let i = 0; i < str.length;) {
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            let strLen = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + strLen;
            decodedStrings.push(str.substring(i,j));
            i = j;
        }
        return decodedStrings;
    }
}
