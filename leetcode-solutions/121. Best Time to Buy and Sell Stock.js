/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/
let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 10, 1, 3, 6, 9, 2];
let prices3 = [7, 6, 4, 3, 1];
let prices4 = [1, 3, 6, 9, 11];
var maxProfit = function (prices) {
let maxProf =0; 
let currentMax = 0;

for (let i =prices.length-1; i >=0; i--) {
   
  currentMax = Math.max(currentMax , prices[i]);
  maxProf = Math.max(maxProf, currentMax - prices[i]);

}
return maxProf;
};




console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
console.log(maxProfit(prices4));


// Intution
/* Idea is to  find two items jinka diffrence maximum ho so that buy minus sell maximum ho.
Bruteforce : on every index find max from remaining array and check diff.
*/

/*
Abhi tak ka max kaun hai
Better : start from right , kyuki we need max from right of the current index
*/