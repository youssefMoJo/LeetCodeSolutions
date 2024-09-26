// Problem link: https://leetcode.com/problems/middle-of-the-linked-list/description/?envType=problem-list-v2&envId=linked-list&difficulty=EASY

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  // Function to convert an array to a linked list
  function arrayToLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
  
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  }


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    return head
};

let headArray = [1,2,3,4,5]
let head = arrayToLinkedList(headArray);

console.log(middleNode(head));