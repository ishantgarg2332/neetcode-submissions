class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /^[a-zA-Z0-9]+$/;
        let str = '';
        for(let c of s) {
            if(regex.test(c)) {
                str += c;
            }
        }

        str = str.toLowerCase();

        let i = 0, j = str.length - 1;

        while(i < j) {
            if(str[i] !== str[j]) return false;
            i++;
            j--;
        }

        return true;
    }
}
