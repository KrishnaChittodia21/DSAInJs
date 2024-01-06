/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// var countConsistentStrings = function (allowed, words) {
//   let count = 0
//   for (let i = 0; i < words.length; i++) {
//     let flag = true
//     for (let j = 0; j < words[i].length; j++) {
//       if (!allowed.includes(words[i][j])) {
//         flag = false
//         break
//       }
//     }
//     if (flag) {
//       count++
//     }
//   }
//   return count
// }

const countConsistentStrings = (allowed, words) => {
  let count = 0
  const regex = new RegExp('^[' + allowed + ']+$')
  words.forEach((word) => {
    if (regex.test(word)) {
      count++
    }
  })
  return count
}

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']))
