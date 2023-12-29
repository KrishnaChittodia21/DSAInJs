/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right]) return false
    left++
    right--
  }
  return true
}

const reverseList = (head) => {
  let prev = null
  while (head) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}

var isPalindrome2 = function (head) {
  let slow = head
  let fast = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let second = reverseList(slow)
  let first = head
  while (second) {
    if (first.val !== second.val) return false
    first = first.next
    second = second.next
  }
  return true
}
