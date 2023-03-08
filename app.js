// path module
const path = require('path')

// get the console to print out a normalized file path
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

// get the base file name of a file path
const baseName = path.basename(filePath)
console.log(baseName)

// get the absolute path (for when your app runs in different environments)
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)

// testing commit on new m2 mac