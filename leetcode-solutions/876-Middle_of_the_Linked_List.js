/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  var length = 1;
  let temp = head;
  while (temp.next != null) {
    let tempHead = temp.next;
    length++;
    temp = tempHead;
  }

  let middle = Math.ceil(length / 2);
  if (length % 2 == 0) {
    middle = middle + 1;
  }

  let current = head;
  let count = 1; // Start from 1st node

  while (current && count < middle) {
    current = current.next;
    count++;
  }

  return current;
};
