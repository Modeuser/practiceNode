// you don't need to navigate to access built-in modules
const os = require('os')

// get info about the user
const user = os.userInfo()
console.log(user)

// get system uptime info
console.log(`The system has been running for ${os.uptime()} seconds`)

//get more system info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)