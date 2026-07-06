class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};

        for(let str of strs){
            const arr = Array(26).fill(0);

            for(let c of str) {
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = arr.join("#");

            if(obj[key]) {
                obj[key].push(str);
            }else{
                obj[key] = [str];
            }
        }

        return Object.values(obj);
    }
}
