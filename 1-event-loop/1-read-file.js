const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!  readFile is asycnhronous function that's why it is offloaded
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')