/**
 * @param {number} turnedOn
 * @return {string[]}
 */

const countBits = (num) => {
  let count = 0
  while (num > 0) {
    count += num & 1
    num >>= 1
  }
  return count
}

var readBinaryWatch = function (turnedOn) {
  const result = []

  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      if (countBits(hour) + countBits(minute) === turnedOn) {
        result.push(`${hour}:${minute < 10 ? '0' + minute : minute}`)
      }
    }
  }

  return result
}
