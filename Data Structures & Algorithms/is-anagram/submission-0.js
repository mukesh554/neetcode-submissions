class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let obj ={}
       let obj2 ={}
       if(s.length !== t.length) return false


       for(let i=0;i<s.length;i++){
         obj[s[i]] = (obj[s[i]] || 0) +1
         obj2[t[i]] = (obj2[t[i]] || 0) +1
       }
       for(let key in obj){
        if(obj[key] !== obj2[key]) return false
       }
        return true
    }
}
