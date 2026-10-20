class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max=0;
  let l=0;
  let set =new Set()
  for(let r=0;r<s.length;r++){
    if(!set.has(s[r])){
      set.add(s[r])
    }
    else
    {
    while(set.has(s[r])){
      set.delete(s[l])
       l++
    
    }
    set.add(s[r])
    }
    max=Math.max(max,r-l+1)
  }
  return max
    }
}
