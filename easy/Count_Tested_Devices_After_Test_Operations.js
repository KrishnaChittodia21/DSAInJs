const countTestedDevices = (batteryPercentage) => {
  let count = 0
  for (let i = 0; i < batteryPercentage.length; i++) {
    if (batteryPercentage[i] > 0) {
      count++
      for (let j = i + 1; j < batteryPercentage.length; j++) {
        batteryPercentage[j] = Math.max(0, batteryPercentage[j] - 1)
      }
    }
  }
  return count
}

console.log(countTestedDevices([1, 1, 2, 1, 3]))
