class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let i = 0, j = i + 1;
        let maxProfit = 0;
        while(j < prices.length) {
            if(prices[i] > prices[j]) {
                i = j;
            } else {
                maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
            }
            j++;
        }
        return maxProfit;
    }
}
