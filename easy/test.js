// const n = 1
// console.log((n ^ 7) | 1)
// console.log(1 >> 1)
let count = 0
let num = 10
while (num > 0) {
  count += num & 1
  num >>= 1
  console.log(num, count)
}
console.log(count)
