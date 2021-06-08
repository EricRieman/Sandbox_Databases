const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./db")

//middle ware
app.use(cors())
app.use(express.json)

//***Routes***

//create a todo


//get all todos


//get a todo


//update a todo


//delete a todo

app.listen( 5000, () => {
  console.log("server is starting on port 5000")
})