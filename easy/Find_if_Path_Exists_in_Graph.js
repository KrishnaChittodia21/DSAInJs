/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

const createGraph = (edges) => {
  const graph = {}
  for (const neighbour of edges) {
    const [a, b] = neighbour
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const hasPath = (graph, source, destination, isVisited) => {
  if (source === destination) return true
  if (isVisited.has(source)) return false
  isVisited.add(source)
  for (const neighbour of graph[source]) {
    if (hasPath(graph, neighbour, destination, isVisited)) return true
  }
  return false
}

var validPathRecursive = function (n, edges, source, destination) {
  const graph = createGraph(edges)
  return hasPath(graph, source, destination, new Set())
}

const validPathIterative = (n, edges, source, destination) => {
  const graph = createGraph(edges)
  const stk = [source]
  const isVisited = new Set()
  while (stk.length > 0) {
    const node = stk.pop()
    if (node === destination) return true
    if (isVisited.has(node)) continue
    isVisited.add(node)
    for (const neighbour of graph[node]) {
      stk.push(neighbour)
    }
  }
}

console.log(
  validPathIterative(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
)

console.log(
  validPathIterative(
    10,
    [
      [4, 3],
      [1, 4],
      [4, 8],
      [1, 7],
      [6, 4],
      [4, 2],
      [7, 4],
      [4, 0],
      [0, 9],
      [5, 4],
    ],
    5,
    9
  )
)
