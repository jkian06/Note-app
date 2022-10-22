const write = require('./write')
const read = require('./read')
const data = process.argv[2]

write(data)
console.log(read())