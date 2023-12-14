var containsNearbyDuplicate = function (nums, k) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    console.log(map, nums[i], i)
    if (map.hasOwnProperty(nums[i])) {
      return Math.abs(i - map[nums[i]]) <= k
    }
    map[nums[i]] = i
  }
  return false
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
