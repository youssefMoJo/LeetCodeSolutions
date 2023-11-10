// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * Original Version with Comments
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Initialize the maximum profit to 0
    let maxProfit = 0
    // Initialize the right and left pointers
    let r = 1
    let l = 0
    // Iterate through the prices array
    while(r < prices.length){
        // Check if the price at the right pointer is greater than the price at the left pointer
        if(prices[r] > prices[l]){
            // Calculate the new profit
            let newProfit = prices[r] - prices[l]
            // Update the maximum profit if the new profit is greater
            if(newProfit > maxProfit){
                maxProfit = newProfit
            }
        }else{
            // Move the left pointer to the right pointer if the price is not increasing
            l = r
        }
        // Move the right pointer to the next element
        r += 1
    }
    // Return the maximum profit
    return maxProfit
};

/**
 * Cleaned Version with Comments
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Initialize the maximum profit to 0
    let maxProfit = 0;
    // Initialize the left pointer to 0
    let left = 0;

    // Iterate through the prices array starting from the second element (right pointer)
    for (let right = 1; right < prices.length; right++) {
        // Check if the price at the right pointer is greater than the price at the left pointer
        if (prices[right] > prices[left]) {
            // Calculate the new profit
            let newProfit = prices[right] - prices[left];
            // Update the maximum profit if the new profit is greater
            maxProfit = Math.max(maxProfit, newProfit);
        } else {
            // Move the left pointer to the right pointer if the price is not increasing
            left = right;
        }
    }

    // Return the maximum profit
    return maxProfit;
};
