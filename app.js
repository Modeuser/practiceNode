// npm commands
// --version

// npm install locally
//  npm i <package name>

// npm install globally to be used in all projects
//  npm install -g <package name>
//  sudo install -g <package name> (super user on mac)

// package.json
//  stores information about the project packages
// quick npm setup
//  npm init (step by step)
//  npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)