//module.exports = { name: 'Test' }

const sum = (...rest) => rest.reduce((acc, curr) => curr + acc)
const mult = (a, b) => a * b
// def exp
// export default sum
// module.exports = sum

// named
// module.exports = { sum, mult }
module.exports.sum = sum
module.exports.mult = mult
