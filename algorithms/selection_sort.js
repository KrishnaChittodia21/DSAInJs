const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    ;[arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

console.log(sort([3, 2, 1]))
console.log(sort([5, 9, -1, 2, 4, 7, 11, 0, 6, 8]))
