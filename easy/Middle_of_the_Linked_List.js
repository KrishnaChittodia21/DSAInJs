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
  if (!head || !head.next) return head
  let slow = head
  let fast = head
  while (fast?.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}

const middleNode2 = (head) => {
  const arr = [head]
  while (arr[arr.length - 1]?.next) {
    arr.push(arr[arr.length - 1].next)
  }
  return arr[Math.floor(arr.length / 2)]
}
