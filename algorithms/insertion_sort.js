const sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      } else {
        break
      }
    }
  }
  return arr
}

console.log(sort([3, 2, 1]))
console.log(sort([0, 1, 2, -2, -1]))
