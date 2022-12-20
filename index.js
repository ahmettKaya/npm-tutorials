const {logEvents} = require('./logEvents')
const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter{}
const myEventEmitter = new MyEventEmitter()
myEventEmitter.on('log', (message) => logEvents(message))

setTimeout(() => {
    myEventEmitter.emit('log', "Merhaba dünya!")
}, 2000)