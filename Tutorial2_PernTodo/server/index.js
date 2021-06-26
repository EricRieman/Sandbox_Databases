//Test on postman: http://localhost:5000/sandbox

const express = require("express")
const cors = require("cors")
const app = express()

const sandbox = require("./routes/sandbox")

//middle ware
app.use(cors())
app.use(express.json())
app.use("/sandbox", sandbox)

app.listen( 5000, () => {
  console.log("server is starting on port 5000")
})