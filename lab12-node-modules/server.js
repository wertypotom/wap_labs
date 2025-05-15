const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const host = '127.0.0.1'
const port = 8000

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true)

  if (pathname === '/' || pathname === '/home’') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('My first server!')
  } else if (pathname === '/about') {
    const filePath = path.join(__dirname, 'files/input.txt')
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error reading image file')
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end(data)
      }
    })
  } else if (pathname === '/image') {
    const imgPath = path.join(__dirname, 'images/image.jpeg')
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error reading image file')
      } else {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        res.end(data)
      }
    })
  } else if (pathname === '/pdf') {
    const pdfPath = path.join(__dirname, 'files/dummy.pdf')
    fs.readFile(pdfPath, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error reading PDF file')
      } else {
        res.writeHead(200, { 'Content-Type': 'application/pdf' })
        res.end(data)
      }
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('404 Not Found')
  }
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
