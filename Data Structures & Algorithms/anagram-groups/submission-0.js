class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map =new Map()
  for(let str of strs){
    let sor = str.split("").sort().join("")
    if(map.has(sor)){
      let tem = map.get(sor)
      tem.push(str)
    }
    else{
      map.set(sor,[str])
    }
  }
  let res=[]
  for(const val of map.values()){
    res.push(val)
  }
  return res
    }
}
