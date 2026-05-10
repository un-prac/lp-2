const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// hardcoded user for now, will change later maybe
var user = "admin"
var pass = "admin"

app.post('/login', function(req, res) {
    var uname = req.body.username
    var pwd = req.body.password

    if(uname == user && pwd == pass) {
        res.send("<h1>Login Successful!</h1><p>Welcome " + uname + "</p>")
    } else {
        res.send("<h1>Login Failed</h1><p>Wrong username or password</p><a href='/'>Go back</a>")
    }
})

app.listen(3001, function() {
    console.log('app running on http://localhost:3001')
})
