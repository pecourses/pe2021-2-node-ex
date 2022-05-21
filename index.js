const os = require('os')
const fs = require('fs')
const util = require('util')

// console.log('os.hostname()', os.hostname())
// вывести цп и дом. директорию
// console.log('os.cpus()', os.cpus())
// console.log('os.homedir()', os.homedir())

// const mathText = fs.readFileSync('./math.js', { encoding: 'utf-8' })
// console.log('mathText', mathText)

// async in node by callbacks (error first)
// fs.readFile('./math.js', { encoding: 'utf-8' }, (err, data) => {
//   if (err) {
//     console.log('err', err)
//   } else {
//     console.log('data', data)
//   }
// })

// промисифицировать readFile с помощью util.promisify

const readFile = util.promisify(fs.readFile)

// readFile('./math.js', { encoding: 'utf-8' })
//   .then(data => console.log('data', data))
//   .catch(err => console.log('err', err))

const dirContaining = fs.readdirSync('.')
// console.log('dirContaining', dirContaining)

// вывести содержимое js файлов текущей директории
// .*\.js

// dirContaining
//   .filter(f => f.endsWith('.js'))
//   .forEach(f =>
//     readFile(f, { encoding: 'utf-8' })
//       .then(data => console.log('data', data))
//       .catch(err => console.log('err', err))
//   )

console.log('process', process.env)
console.log('__filename', __filename)
console.log('__dirname', __dirname)
