const express = require('express')
const server = express()
const resize = require('./resize')

server.get('/', (req, res) => {
    // Extract the query-parameter
    const widthString = req.query.width
    const heightString = req.query.height
    const format = req.query.format
  
    // Parse to integer if possible
    let width, height
    if (widthString) {
      width = parseInt(widthString)
    }
    if (heightString) {
      height = parseInt(heightString)
    }
    // Set the content-type of the response
    res.type(`image/${format || 'png'}`)
  
    // Get the resized image
    resize('images/009.JPG', format, width, height).pipe(res)
})

server.listen(8000, () => {
    console.log('Server started!')
})