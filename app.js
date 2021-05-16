const express = require('express')
const app = express()
const routes = require('./routes')

require('dotenv').config()
app.use('/', routes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
