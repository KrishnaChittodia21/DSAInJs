/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  return (start ^ goal).toString(2).replace(/0/g, '').length
}

console.log(minBitFlips(10, 7))
