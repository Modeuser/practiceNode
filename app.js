// two ways/modules to interact with file system (fs)
// 1. sync (blocking) 2. async (non-blocking)
// the differences will be explained later in the course

// the a-sync method (remove the sync suffix)
const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})