class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};
        
        for(let num of nums) {
            obj[num] = (obj[num] || 0) + 1;
        }

        let arr = Array(nums.length).fill(undefined);

        for(const [key, value] of Object.entries(obj)) {
            if(arr[value]) {
                arr[value].push(+key);
            }else {
                arr[value] = [+key];
            }
        }
        let ans = [];

        for(let i = arr.length - 1; i >= 0; --i) {
            if(arr[i]) {
                ans.push(...arr[i])
            }
        }

        return ans.splice(0,k);
    }
}
