const mergeTwoSortedArrays = (arr1, arr2) => {
  const result = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}

const sort = (arr) => {
  const mergeSort = (arr, left, right) => {
    if (left === right) return [arr[left]]
    const mid = Math.floor((left + right) / 2)
    const leftArr = mergeSort(arr, left, mid)
    const rightArr = mergeSort(arr, mid + 1, right)
    return mergeTwoSortedArrays(leftArr, rightArr)
  }
  return mergeSort(arr, 0, arr.length - 1)
}

console.log(sort([3, 2, 1]))
