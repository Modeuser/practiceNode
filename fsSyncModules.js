// two ways/modules to interact with file system (fs)
// 1. sync (blocking) 2. async (non-blocking)
// the differences will be explained later in the course

// the sync method
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// now to write a file (overwrite/create)
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`)
// if you only need to append
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})

// In "sync" if there are multiple users on your website, then each
// process must be completed before the next user's request is taken
// this is the issue with "sync"