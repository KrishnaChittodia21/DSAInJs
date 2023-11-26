/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false
  }
  const insert = ['(', '[', '{']
  const mapper = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (insert.includes(s.charAt(i))) {
      stack.push(s.charAt(i))
    } else if (mapper[s.charAt(i)] !== stack[stack.length - 1]) {
      return false
    } else if (mapper[s.charAt(i)] === stack[stack.length - 1]) {
      stack.pop()
    }
  }
  return stack.length === 0
}
