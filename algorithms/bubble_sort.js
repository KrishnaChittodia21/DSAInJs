const sort = (arr) => {
  for (let i = 0; i < arr.length - i; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
console.log(sort([3, 2, 1]))
console.log(sort([5, 9, -1, 2, 4, 7, 11, 0, 6, 8, 11]))
