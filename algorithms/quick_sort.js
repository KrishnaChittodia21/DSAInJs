const quickSort = (arr) => {
  if (arr.length <= 1) return arr
  const pi = arr[0]
  const left = []
  const right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pi) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pi, ...quickSort(right)]
}

console.log(quickSort([3, 2, 1]))
