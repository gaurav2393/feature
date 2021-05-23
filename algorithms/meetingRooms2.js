var minMeetingRooms = function(intervals) {
    var length = intervals.length;
    var rooms = [];
    intervals.sort(function(a, b){return a[0]-b[0]});
    var i = 0;
    var j = 0;
    var found = false;
    for (i=0; i < length ; i++) {
        var roomLength = rooms.length;
        for (j = 0 ; j < roomLength ; j++) {
            if (rooms[j] <= intervals[i][0]) {
                rooms[j] = intervals[i][1];
                found = true;
                break;
            }
        }
        if (!found) {
            rooms.push(intervals[i][1]);
        }
    }
    return rooms.length;
};

console.log(minMeetingRooms([[1,5],[8,9],[8,9]]));