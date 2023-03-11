const EventEmitter = require('events')

const customEmitter = new EventEmitter()
// you have to tell functions to "listen" to an event first
// before you emit the event
customEmitter.on('response', (name,id)=>{
    console.log(`data received use: ${name} with id:${id}`)
})

customEmitter.on('response', () =>{
    console.log(`some other logic here `)
})

customEmitter.emit('response', 'john', 34)
// even if you don't setup events manuallly, lots of built-in modules uses
// events that you can "hitchhike off of"