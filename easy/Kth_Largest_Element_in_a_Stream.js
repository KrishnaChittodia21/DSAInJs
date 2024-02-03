// /**
//  * @param {number} k
//  * @param {number[]} nums
//  */
// var KthLargest = function (k, nums) {
//   this.k = k
//   this.nums = nums
//   this.nums.sort((a, b) => a - b)
//   this.nums = this.nums.slice(0, this.k)
// }

// /**
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function (val) {
//   this.nums.push(val)
//   this.nums.sort((a, b) => a - b)
//   this.nums = this.nums.slice(0, this.k)
//   return this.nums[this.k - 1]
// }

// /**
//  * Your KthLargest object will be instantiated and called as such:
//  * var obj = new KthLargest(k, nums)
//  * var param_1 = obj.add(val)
//  */

class MinHeap {
  constructor() {
    this.heap = []
  }

  size() {
    return this.heap.length
  }

  getMin() {
    return this.size() > 0 ? this.heap[0] : null
  }

  sort(firstIndex, secondIndex) {
    const temp = this.heap[firstIndex]
    this.heap[firstIndex] = this.heap[secondIndex]
    this.heap[secondIndex] = temp
  }

  insert(val) {
    this.heap.push(val)
    this.heapifyUp()
  }

  remove() {
    if (this.size() === 0) return null
    if (this.size() === 1) return this.heap.pop()
    const res = this.heap.pop()
    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return res
  }

  heapifyUp() {
    let index = this.size() - 1
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[index] < this.heap[parentIndex]) {
        this.sort(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  heapifyDown() {
    let index = 0
    while (true) {
      const leftChildIndex = index * 2 + 1
      const rightChildIndex = index * 2 + 2
      let smallestChildIndex = index
      if (
        leftChildIndex < this.size() &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex
      }
      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex
      }
      if (smallestChildIndex !== index) {
        this.sort(smallestChildIndex, index)
        smallestChildIndex = index
      } else {
        break
      }
    }
  }
}

var KthLargest = function (k, nums) {
  this.k = k
  this.heap = new MinHeap()
  for (const num of nums) {
    this.add(num)
  }
}

KthLargest.prototype.add = function (val) {
  this.heap.insert(val)
  if (this.heap.size() > this.k) {
    this.heap.remove()
  }
  return this.heap.getMin()
}

const kk = new KthLargest(3, [4, 5, 8, 2])
console.log(kk.add(3))
console.log(kk.add(5))
kk.add(10)
kk.add(9)
kk.add(4)
