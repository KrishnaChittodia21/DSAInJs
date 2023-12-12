/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */

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
