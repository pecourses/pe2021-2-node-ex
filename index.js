// Common JS modules

//console.log('require()', require('./math.js'))

// def imp
// import sum1 from './math'
// const sum1 = require('./math')
// console.log('sum1(1,2,3,4,5,6)', sum1(1, 2, 3, 4, 5, 6))

// named

// импортировать mult обоими синтаксисами
// const { sum, mult } = require('./math')
const Math = require('./math')

console.log('sum(1,2,3,4,5,6)', Math.sum(1, 2, 3, 4, 5, 6))
console.log('Math.mult(1,2)', Math.mult(1, 2))
