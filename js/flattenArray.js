// var finalArray = [];
var arrayToFlatten = [1, [2], [3, [4, [5, 6, [7, 8, 9, 10, [11, 12, 13, [14, 15, 16]]]]]]];

function flattenArray(arrayToFlatten, finalArray) {
    var length = arrayToFlatten.length;
    var i;
    for(i=0; i < length ; i++) {
        if(!(arrayToFlatten[i] instanceof Array)) {
            finalArray.push(arrayToFlatten[i]);
        } else {
            flattenArray(arrayToFlatten[i], finalArray);
        }
    }
}
finalArray1 = [];
flattenArray(arrayToFlatten, finalArray1);

console.log('lets see', finalArray1);
