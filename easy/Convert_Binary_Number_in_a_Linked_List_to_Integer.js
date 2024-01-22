function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function (head) {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr.reduce((prev, curr) => prev * 2 + curr, 0)
}

const getDecimalValue2 = (head) => {
  let res = ''
  while (head) {
    res += head.val
    head = head.next
  }
  return parseInt(res, 2)
}

const list = new ListNode(1, new ListNode(0, new ListNode(1)))

console.log(getDecimalValue2(list))
