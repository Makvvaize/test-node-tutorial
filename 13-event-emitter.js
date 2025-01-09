const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`Data Received ${name} ${id}`)
})

customEmitter.on('response',()=>{
    console.log(`Some other logic`)
})

customEmitter.on('click',()=>{
    console.log(`Clicked`)
})


customEmitter.emit('response', 'batu' , 24)

customEmitter.emit('click')