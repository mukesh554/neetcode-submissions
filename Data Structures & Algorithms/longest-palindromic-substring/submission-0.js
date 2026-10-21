class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
         let max=''
  for(let i=0;i<s.length;i++){
    pali(i,i)
    pali(i,i+1)
  }

  function pali(l,r){
    while(l>=0 && r<s.length && s[l]===s[r]){
      if(r-l+1>max.length){
        max= s.slice(l,r+1)
      }
      l--;
      r++;
    }
  }
  return max

    }
}
