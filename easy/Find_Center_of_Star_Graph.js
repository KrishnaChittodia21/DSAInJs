/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const map = {}
  for (let i = 0; i < edges.length; i++) {
    const [first, second] = edges[i]
    if (map[first]) map[first] = map[first] + 1
    if (map[second]) map[second] = map[second] + 1
    if (!map[first]) map[first] = 1
    if (!map[second]) map[second] = 1
  }
  let max = 0
  for (const key in map) {
    if (map[key] === edges.length) max = key
  }
  return max
}

const edges = [
  [1, 2],
  [2, 3],
  [4, 2],
]

console.log(findCenter(edges))
