class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};
    
        for(let i = 0; i < nums.length; ++i) {
            if(!obj[nums[i]]) {
                obj[nums[i]] = [i];
            }else {
                obj[nums[i]].push(i);
            }
        }

        for(let i = 0; i < nums.length; ++i) {
            if(nums[i] === target - nums[i] && obj[nums[i]].length > 1) {
                return obj[nums[i]];
            }else if(obj[target - nums[i]] &&( obj[nums[i]] !== obj[target-nums[i]])) {
                return [...obj[nums[i]], ...obj[target - nums[i]]]
            }
        }
        return [];
    }
}
