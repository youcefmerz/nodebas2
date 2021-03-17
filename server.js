const express = require('express')

const app = express()
const port = 4001

const myLogger = (req , res , next) => {
    console.log (`A new request received at ${Date.now()}`)
    next()
}

app.use(myLogger)
 app.get("/", (req , res)=> {
    res.send("hello world")
})




app.listen(port , err => {
    err ? console.log(err): console.log('server is up on port0' ,  port)
})