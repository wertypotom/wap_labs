const express = require('express')
const additionRoute = require('./routes/additionRoute')
const substractionRoute = require('./routes/substractionRoute')
const multiplicationRoute = require('./routes/multiplicationRoute')
const devisionRoute = require('./routes/devisionRoute')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1/addition', additionRoute)
app.use('/api/v1/substraction', substractionRoute)
app.use('/api/v1/multiplication', multiplicationRoute)
app.use('/api/v1/devision', devisionRoute)

module.exports = app
