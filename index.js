const express = require('express')
const web = express()
const port = 3000

web.get('/tin-tuc', (req, res) => {
  return res.send('Hello World!')
})

web.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 