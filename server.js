const express = require('express')
const path = require('path')
const port = process.env.PORT || 8081
const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
