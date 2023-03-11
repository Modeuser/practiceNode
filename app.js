// writable, readable, duplex does both, transform

// streams are great for reading large files
// if we simply read files by using variables with readfSync,
// eventually files will get too big

const {createReadStream} = require('fs')

// we can specific the size of the chunk by which the data will be divide to
const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})

stream.on('data',(result)=> {
    console.log(result)
})

// error checking
stream.on('error',(err)=> console.log(err))
// streams allow us to divide data into chunks
// a 167k files is divided into 16k, 16k, etc...