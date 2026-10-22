class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         let l= new Array(nums.length).fill(1)
  let r=new Array(nums.length).fill(1)
  let res=[]
  for(let i=1;i<nums.length;i++){
    l[i]=l[i-1]*nums[i-1]
  }
  for(let i=nums.length-2;i>=0;i--){
    r[i]=nums[i+1]*r[i+1]
    
  }
  for(let i=0;i<nums.length;i++){
    res[i]=l[i]*r[i]
  }
  return res
    }
}
