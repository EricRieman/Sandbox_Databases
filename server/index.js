//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';

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

app.get("/users", async(req,res) => {
  try {
    const {name} = req.query
    const users = await pool.query( "SELECT * FROM users")

    res.json(users.rows)

  } catch(err) {
    console.error(err.message);
  }
})

app.listen( 5000, () => {
  console.log("server is starting on port 5000")
})

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );