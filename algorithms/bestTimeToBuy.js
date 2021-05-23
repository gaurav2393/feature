// var maxProfit = function(prices) {
//     var profits = [];
//     profits[0] = 0;
//     var total = 0 ; 
//     var length = prices.length;
//     profits[1] = 0;
//     if (prices[1] > prices[0]) {
//         total = prices[1] - prices[0];
//         profits[1] = prices[1] - prices[0];
//     }
//     for (let i = 2 ; i < length ; i++) {
//         profits[i] = profits[i-1];
//         for (let j = i-1 ; j >=0 ; j--) {
//             if (prices[j] < prices[i]) {
//                 profits[i] = Math.max(profits[i], profits[j-1] + (prices[i] - prices[j]));
//             }
//         }
//     }
//     if(total<profits[length-1]) {
//         total = profits[length - 1];
//     }
//     return total;
// };


//  this one is better
// var profits = [];
    // profits[0] = 0;
    var total = 0 ; 
    var length = prices.length;
    // profits[1] = 0;
    // if (prices[1] > prices[0]) {
    //     total = prices[1] - prices[0];
    //     profits[1] = prices[1] - prices[0];
    // }
    for (let i = 1 ; i < length ; i++) {
        if (prices[i] > prices[i - 1]) {
                total += prices[i] - prices[i - 1];
        }
        // profits[i] = profits[i-1];
        // for (let j = i-1 ; j >=0 ; j--) {
        //     if (prices[j] < prices[i]) {
        //         if(j!==0) {
        //             profits[i] = Math.max(profits[i], profits[j-1] + (prices[i] - prices[j]));
        //         } else {
        //             profits[i] = Math.max(profits[i], prices[i] - prices[j]);
        //         }
        //     }
        // }
    }
    // if(total<profits[length-1]) {
    //     total = profits[length - 1];
    // }
    return total;

console.log(maxProfit([1,2,3,4,5]));