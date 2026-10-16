class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        if(nums[0]===0 && nums.length>1) return false
        let max=0;
        for(let i=0;i<nums.length;i++){
              if(i>max) return false

              max= Math.max(max,i+nums[i])
        }
        return true
    }
}
