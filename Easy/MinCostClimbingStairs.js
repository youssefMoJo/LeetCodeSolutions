/**
 * Given an array 'cost' representing the cost of reaching each step of a staircase,
 * this function calculates the minimum cost to climb the stairs. It uses dynamic
 * programming to iteratively find the optimal path with the minimum cost.
 *
 * Problem Statement:
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 *
 * @param {number[]} cost - An array of costs for each step of the staircase.
 * @return {number} - The minimum cost to climb the stairs while adhering to the rules.
 */
var minCostClimbingStairs = function (cost) {
  // Iterate through the 'cost' array starting from the third-to-last step.
  for (let i = cost.length - 3; i >= 0; i--) {
    // Calculate the minimum cost to reach the current step by considering
    // the two possible paths: advancing one step or two steps.
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }

  // The minimum cost to start from the beginning can be either
  // the cost of the first step or the cost of the second step.
  return Math.min(cost[0], cost[1]);
};
