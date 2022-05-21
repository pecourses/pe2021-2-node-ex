const http = require('http')

const PORT = process.env.PORT || 5000
const HOST = 'localhost'

// создание http-сервера
const httpServer = http.createServer((request, response) => {
  const { url, method } = request
  console.log('url', url)
  console.log('method', method)

  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')
  response.end(
    `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <h1>Home</h1>
  </body>
  </html>`
  )
})

// запуск http-сервера
httpServer.listen(PORT, HOST, () => {
  console.log(`Server instance is listening http://${HOST}:${PORT}`)
})
