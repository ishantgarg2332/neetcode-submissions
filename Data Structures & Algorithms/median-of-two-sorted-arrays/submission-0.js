class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let arr = [];
        let i = 0, j = 0;
        while(i < nums1.length && j < nums2.length) {
            if(nums1[i] < nums2[j]) {
                arr.push(nums1[i]);
                ++i;
            }else {
                arr.push(nums2[j]);
                ++j;
            }
        }
        
        if(i < nums1.length) {
            arr.push(...nums1.slice(i));
        }
        if(j < nums2.length) {
            arr.push(...nums2.slice(j));
        }

        if(arr.length % 2 !== 0) {
            return arr[Math.floor(arr.length / 2)];
        }else {
            const idx = arr.length / 2;
            return (arr[idx] + arr[idx - 1]) / 2;
        }
    }
}
