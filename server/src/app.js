const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.post('/register', (req, res) => {
  res.send({
    message: `Hi ${req.body.email}, How are you?`
  })
})

app.listen(3000, () => {
  console.log('app run at 3000')
})
