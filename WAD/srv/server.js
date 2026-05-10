const express = require('express')
const app = express()

// serve files from public folder
app.use(express.static('public'))

app.listen(3000, function() {
    console.log('server started on port 3000')
})
