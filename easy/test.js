let n = 10
let count = 0
while (n != 0) {
  n -= n & -n
  count++
}

console.log(count)
