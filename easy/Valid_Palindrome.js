/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const filteredString = s.trim(' ').replace(/[^a-zA-Z0-9]/gi, '')
  if (s.length === 1) return true
  return (
    filteredString.split('').reverse().join('').toLowerCase() ===
    filteredString.toLowerCase()
  )
}
