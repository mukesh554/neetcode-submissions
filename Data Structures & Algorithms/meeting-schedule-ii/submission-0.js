/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
   
 minMeetingRooms = function(intervals) {
   if (intervals.length === 0) return 0;

    const starts = intervals.map(x => x.start).sort((a, b) => a - b);
    const ends = intervals.map(x => x.end).sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let rooms = 0;
    let maxRooms = 0;

    while (i < starts.length) {
        if (starts[i] < ends[j]) {
            rooms++;
            maxRooms = Math.max(maxRooms, rooms);
            i++;
        } else {
            rooms--;
            j++;
        }
    }

    return maxRooms;
};
}
