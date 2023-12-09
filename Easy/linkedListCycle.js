// LeetCode Question: https://leetcode.com/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Function to determine if a linked list has a cycle.
 * @param {ListNode} head - The head of the linked list.
 * @return {boolean} - Returns true if there is a cycle, false otherwise.
 */
var hasCycle = function (head) {
  // Initialize two pointers, 'head' and 'fast', both starting at the head of the linked list.
  let fast = head;

  // Iterate through the linked list using two pointers: 'head' moves one step at a time, 'fast' moves two steps at a time.
  while (fast && fast.next) {
    // Move 'head' one step forward.
    head = head.next;

    // Move 'fast' two steps forward.
    fast = fast.next.next;

    // If there is a cycle, 'head' and 'fast' will eventually meet at the same node.
    if (head === fast) return true;
  }

  // If 'fast' reaches the end of the list (null), there is no cycle.
  return false;
};

// Example usage:
// Create a linked list: 3 -> 2 -> 0 -> -4
let head = [3, 2, 0, -4];
console.log(hasCycle(head));
