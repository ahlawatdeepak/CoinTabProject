const express = require('express')
const cors=require("cors")
const Connect = require('./DBConnect/connect')
const userRouter = require('./Users')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// Routers-------------------------------------------
app.use("/user",userRouter)


app.get('/', (req, res) => res.send('hello'))


// Local Port -------------------------------------------------
app.listen(8080, async() => {
      await Connect()     
    console.log('server started on port 8080')
})