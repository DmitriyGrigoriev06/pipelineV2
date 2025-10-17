'use strict'

const express = require('express')

const app = express()

app.get('/', (_req, res) => {
  res.send('а это уже другой текст')
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://0.0.0.0:${port}`)
})


