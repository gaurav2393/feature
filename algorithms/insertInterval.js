var insert = function(intervals, newInterval) {
    const length = intervals.length;
    let startIndex = -1;
    let endIndex = -1;
    if (length==0) {
        return [newInterval];
    }
    let startValue = -1;
    let endValue = -1;
    let i = 0 ;
    while(i!=length) {
        if(intervals[i][1] >= newInterval[0]) {
            startIndex = i;
            endIndex = i;
            // if (intervals[i][0] < newIntervals[0]) {
            //     startValue = intervals[i][0];
            // } else {
            //     startValue = newIntervals[0];
            // }
            startValue = Math.min(intervals[i][0], newInterval[0]);
            break;
        }
        i++;
    }
    if (startIndex > -1) {
        while(i!=length && intervals[i][1] < newInterval[1]) {
            i++;
            endIndex = i;
        }
        if (endIndex > -1) {
            endValue = newInterval[1];
            if (i!=length && newInterval[1] >= intervals[i][0]) {
                endValue = intervals[i][1];
                intervals.splice(startIndex, (endIndex-startIndex) + 1, [startValue, endValue]);
            } else {
                intervals.splice(startIndex, endIndex-startIndex, [startValue, endValue]);
            }
            // intervals.splice(startIndex, (endIndex-startIndex), [startValue, endValue]);
            return intervals
        } else {
            return [newInterval].concat([intervals]);
        }
    } else {
        return intervals.concat([newInterval]);
    }
};

// console.log(insert([[1,3],[6,9]], [2,5]));
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
// console.log(insert([], [5,7]));
// console.log(insert([[1,5]], [2,3]));
// console.log(insert([[1,5]], [2,7]));
console.log(insert([[1,5]], [6,8]));
