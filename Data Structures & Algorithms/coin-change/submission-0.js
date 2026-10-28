class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) { 
        let dp = Array.from({length:amount+1}).fill(Infinity)
  dp[0]=0
  for(let i=0;i<=amount;i++){
    for(let coin of coins){
      if(coin>i) continue
      dp[i]= Math.min(dp[i],1+dp[i-coin])
    }
    
  }
     return dp[amount]!==Infinity?dp[amount]:-1
}
    }

