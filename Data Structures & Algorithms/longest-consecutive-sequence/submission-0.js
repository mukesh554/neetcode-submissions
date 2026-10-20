class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest =0;
  let set =new Set(nums)
  for(const num of nums){
    if(!set.has(num-1)){
      let start=num
      let count=0
      while(set.has(start+count)){
        count++
        // start++
      }
      longest=Math.max(longest, count)
    }
    
  }
  return longest
    }
}
