const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./db")

//middleware
app.use(cors())
//app.use(express.json()) //gives us req.body

//routes

//query parameters: allow us to send data in our url: http://localhost:5000/?name=henry = req.query
//params: allows us to identify a specific resource: http://localhost:5000/:id = req.params
// we can test the below request using this link in postman: http://localhost:5000/sandbox/?inputName=he
app.get("/sandbox", async(req,res) => {
  try {
    const {inputName} = req.query //it is important the name here matches the name in the query parameters
    //const users = await pool.query( "SELECT * FROM users WHERE first_name = '" + name + "'")

    // For a more advanced query that will return any first or last name form the matching charaters,
    // lets disect the querry below using the LIKE operator and %{}%

    //first, we concat the first and last name using ||
    const firstAndLast = "first_name || ' ' || last_name";

    // next we use the LIKE operator and define a pattern
    // but because we are using postgres, we can instead use ILIKE, which makes the search case-insensitive
    const users = await pool.query( "SELECT * FROM users WHERE " + firstAndLast + " ILIKE $1", [`%${inputName}%`]) //make sure to use `` here!

    res.json(users.rows)

  } catch(err) {
    console.error(err.message);
  }
})

app.listen( 5000, () => {
  console.log("server is starting on port 5000")
})