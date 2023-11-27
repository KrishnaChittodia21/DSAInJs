function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let temp = head
  while (temp && temp.next) {
    if (temp.val === temp.next.val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return head
}
let head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(3)
let res = deleteDuplicates(head)
console.log(res)
