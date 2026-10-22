class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
     let obj ={}
  for(let num of nums){
    obj[num] =(obj[num] || 0) +1
  }
  let res = Array.from({length:nums.length+1},()=>[])
  for(let key in obj){
    res[obj[key]].push(Number(key));
  }
  let r=[]
  for(let i=res.length-1;i>=0;i--){
    for(let num of res[i]){
      r.push(num)
      if(r.length==k)
        return r
    }
  }
  return r
}
}