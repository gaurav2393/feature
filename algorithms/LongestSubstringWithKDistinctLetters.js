var lengthOfLongestSubstringKDistinct = function(s, k) {
    var total = 0;
    var tempTotal = 0;
    var strObj = {};
    var endIndexes = [];
    var charArray = [];
    var i = 0;
    var length = s.length;
    var charCount = 0;
    for(i = 0 ; i < length ; i++) {
        // if (charArray.length <= k) {
            if (strObj[s[i]]===0 || strObj[s[i]]) {
                // charArray.splice(strObj[s[i]], 1);
                // endIndexes.splice(strObj[s[i]], 1);
                strObj[s[i]] = charArray.length; 
                endIndexes.push(i);
                charArray.push(s[i]);
                tempTotal++;
                if (total < tempTotal) {
                    total = tempTotal;
                }
            } else {
                if (charCount === k && k!==1) {
                    let tempKeys = Object.keys(strObj);
                    let tempIndex1 = endIndexes[strObj[tempKeys[0]]] < endIndexes[strObj[tempKeys[1]]] ? endIndexes[strObj[tempKeys[0]]] : endIndexes[strObj[tempKeys[1]]];
                    let tempIndex2 = endIndexes[strObj[tempKeys[0]]] < endIndexes[strObj[tempKeys[1]]] ? endIndexes[strObj[tempKeys[1]]] : endIndexes[strObj[tempKeys[0]]];
                    let tempLength = tempKeys.length;
                    let j = 2;
                    for (j = 2 ; j < tempLength ; j++) {
                        if (endIndexes[strObj[tempKeys[i]]] < tempIndex1) {
                            tempIndex2 = tempIndex1;
                            tempIndex1 = endIndexes[strObj[tempKeys[i]]];
                        } else if (endIndexes[strObj[tempKeys[i]]] < tempIndex2) {
                            tempIndex2 = endIndexes[strObj[tempKeys[i]]];
                        }
                    }
                    tempTotal = tempTotal - (endIndexes[tempIndex2] - endIndexes[tempIndex1]);
                    delete strObj[tempKeys[tempIndex1]];
                    // charArray.splice(0, 1);
                    // endIndexes.splice(0, 1);
                    strObj[s[i]] = endIndexes.length;
                    endIndexes.push(i);
                    charArray.push(s[i]);
                    tempTotal++;
                    if (total < tempTotal) {
                        total = tempTotal;
                    }
                } else if(k===1) {
                    delete strObj[charArray[0]];
                    // charArray.splice(0, 1);
                    // endIndexes.splice(0, 1);
                    tempTotal = 0;
                    strObj[s[i]] = endIndexes.length;
                    endIndexes.push(i);
                    charArray.push(s[i]);
                    tempTotal++;
                    if (total < tempTotal) {
                        total = tempTotal;
                    }
                } else {
                    charCount++;
                    strObj[s[i]] = endIndexes.length;
                    endIndexes.push(i);
                    charArray.push(s[i]);
                    tempTotal += 1;
                    if (total < tempTotal) {
                        total = tempTotal;
                    }
                }
            }
        // }
    }
    return total;
};

console.log(lengthOfLongestSubstringKDistinct('abaccc', 2));
