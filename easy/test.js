function getAllSubarrays(nums) {
  const unique = [...new Set(nums)]
  return 2 ** (unique.length * 2) - 1
}

console.log(getAllSubarrays([1, 2, 1]))
