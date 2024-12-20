// Modules - Every file is module
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require ('./6-alternative-flavors')

require('./7-mind-grenade')

console.log(data)


sayHi("Batu")
sayHi(names.Ali)
sayHi(names.Mehmet)

