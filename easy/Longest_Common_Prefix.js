/**
 * @param {string[]} strs
 * @return {string}
 */
const getLongestSubstr = (str1, str2) => {
  let i = 0
  while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
    i++
  }
  return str1.substring(0, i)
}
const longestCommonPrefix = function (strs) {
  let lcp = strs[0]
  for (let i = 1; i < strs.length; i++) {
    lcp = getLongestSubstr(lcp, strs[i])
  }
  return lcp
}
