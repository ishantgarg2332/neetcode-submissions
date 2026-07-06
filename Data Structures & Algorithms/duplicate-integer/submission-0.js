class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};
        for(let num of nums) {
            if(obj[num]){
                return true;
            }
            obj[num] = 1;
        }
        return false;
    }
}
