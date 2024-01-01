const arr = [
  [1, 3],
  [2, 2],
]
const flatArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array?.isArray(curr) ? flatArray(curr) : curr)
  }, [])
}
console.log(flatArray(arr))
