const checkArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i], arr2[i])
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}

var areSimilar = function (mat, k) {
  const tempArr = JSON.parse(JSON.stringify(mat))
  while (k > 0) {
    for (let i = 0; i < mat.length; i++) {
      const temp = tempArr[i].shift()
      tempArr[i].push(temp)
    }
    k--
  }
  for (let i = 0; i < mat.length; i++) {
    if (!checkArray(mat[i], tempArr[i])) return false
  }
  return true
}
const mat = [
  [1, 2, 1, 2],
  [5, 5, 5, 5],
  [6, 3, 6, 3],
]
const mat2 = [[1, 2]]
const k = 1
console.log(areSimilar(mat2, k))
