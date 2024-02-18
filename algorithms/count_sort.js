const countSort = (arr) => {
  const max = Math.max(...arr)
  const count = new Array(max + 1).fill(0)
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++
  }
  let j = 0
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      arr[j++] = i
      count[i]--
    }
  }
  return arr
}

console.log(countSort([1, 4, 1, 2, 7, 5, 2]))
