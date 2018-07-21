const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send({
    message: 'hi i ma here'
  })
})

app.listen(3000, () => {
  console.log('app run at 3000')
})
