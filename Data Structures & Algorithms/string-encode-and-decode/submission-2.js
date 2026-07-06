class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for(let str of strs) {
            encodedString += ((str.length + '#') + str);
        }
        console.log(encodedString)
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStrings = [];
        for(let i = 0; i < str.length;) {
            // let strLen = +str[i];
            // i += 2;
            // decodedStrings.push(str.substring(i, i + strLen));
            // i += strLen;
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
