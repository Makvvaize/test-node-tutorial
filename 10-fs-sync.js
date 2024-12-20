const {readFileSync,writeFileSync} = require('fs')

// Same with the above
// const fs = require('fs')
// fs.readFileSync
// fs.writeFileSync
console.log("Task Started")
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'} // append flag. if it is not added it will overwrite everything.
)
console.log('File Written')
console.log('Next Task')