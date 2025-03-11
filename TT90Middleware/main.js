const express = require('express')
const app = express()
const port = 3000
const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}
app.use(requestTime) //this middleware request will not initiate if other middleware request is below it 
app.use(requestTime) 
app.use(myLogger)
// app.get('/', (req, res) => {
//     let responseText = 'Hello World!<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
// })
app.get('/', (req, res) => {
    res.send('Hello World! wassup yooo')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})