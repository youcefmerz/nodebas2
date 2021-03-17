const express = require('express')
const path = require("path")
const app = express()
const port = 10010

//pour declarer le path du page
const publicDirectoryPath = path.join(__dirname, './public')


/*app.get('/', (req , res) => { 
    res.send("hello express")
})*/

const date = new Date() 
date.getHours() < 8 || date.getHours() >    17
? app.get("/public/home.html", (req , res)=> {
    res.send("this is not working time go have some fun !!!!")
})
: //pour faire l'appele a la page
app.use(express.static(publicDirectoryPath))



app.listen(port , err => {
    err ? console.log(err): console.log('server is up on port0' ,  port)
})