class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let res =[]
  intervals.sort((a,b)=>a[0]-b[0])
  let tem =intervals[0]
  

  for(let i=1;i<intervals.length;i++){
    if(tem[1]<intervals[i][0]){
      res.push(tem)
      tem=intervals[i]
    }
  
  else {
    tem =[Math.min(tem[0],intervals[i][0]),Math.max(tem[1],intervals[i][1])]
  }
  }
  res.push(tem)
  return res
}
    
}
