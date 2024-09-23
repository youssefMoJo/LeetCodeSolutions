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
var deleteDuplicates = function (head) {
  let cur = head;
  while (cur) {
    while ((cur.next && cur.next.val) === cur.val) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
  }

  return head;
};

let headArray = [1, 1, 2];
let head = arrayToLinkedList(headArray);

console.log(deleteDuplicates(head));
