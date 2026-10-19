class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map()
        map.set(")","(")
        map.set("}","{")
        map.set("]","[")
        let stack=[]
        for(let i=0;i<s.length;i++){
            if(!map.has(s[i])){
                stack.push(s[i])
            }
            else{
                 let t=stack.pop()
                if(map.get(s[i])!==t) return false
                
            }
        }
        return stack.length===0
    }
}
