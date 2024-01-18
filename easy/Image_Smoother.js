/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let res = []
  for (let i = 0; i < img.length; i++) {
    let temp = []
    for (let j = 0; j < img[0].length; j++) {
      let sum = 0
      let count = 0
      for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          if (k >= 0 && k < img.length && l >= 0 && l < img[0].length) {
            sum += img[k][l]
            count++
          }
        }
      }
      temp.push(Math.floor(sum / count))
    }
    res.push(temp)
  }
  return res
}
console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
)
