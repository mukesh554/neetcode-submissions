class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit =-Infinity
        let minPrice=prices[0]

        for(let i=0;i<prices.length;i++){
           maxProfit= Math.max(maxProfit,prices[i]-minPrice)
            if(prices[i]<minPrice){
                minPrice=prices[i]
            }
        }
        return maxProfit
    }
    
}
