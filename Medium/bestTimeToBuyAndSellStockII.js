/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let totalProfit = 0;
  let buy = prices[0]; // Initialize buy price with the first price

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // If the current price is lower than the buy price, update the buy price
    if (currentPrice < buy) {
      buy = currentPrice;
    } else if (currentPrice > buy) {
      // Calculate the profit and add it to the total profit
      totalProfit += currentPrice - buy;
      // Update the buy price to the current price
      buy = currentPrice;
    }
  }

  return totalProfit;
};

const prices = [1, 2, 3, 4, 5];
console.log(maxProfit(prices));
