/**
 * @param {number[]} arr
 * @return {number[]}
 */

const sortByBits = (arr) => {
  const map = {}
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = arr[i].toString(2).replace(/0/g, '').length
  }
  return arr.sort((a, b) => map[a] - map[b])
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))
