const test = 'A man, a plan, a canal: Panama'
const filteredString = test.trim(' ').replace(/[^a-zA-Z]/gi, '')
console.log(filteredString.split('').reverse().join(''))
