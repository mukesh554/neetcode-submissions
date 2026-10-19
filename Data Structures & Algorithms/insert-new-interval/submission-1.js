class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let sor = intervals.sort((a,b)=>a[0]-b[0])
  let res=[]
  for(let interval of sor){
    if(newInterval[1] <interval[0]){
      res.push(newInterval)
      newInterval=interval
    }
    else if(newInterval[0] <=interval[1]){

    let temp =[Math.min(newInterval[0],interval[0]),
           Math.max(newInterval[1],interval[1])]

      newInterval=temp
    }
    else {
      res.push(interval)
    }
  }
  res.push(newInterval)
  return res
}
}
