//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';

const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./dp")

//middleware
app.use(cors())
app.use(express.json()) //gives us req.body

//routes

app.get("/users", async(req,res) => {
  try {
    res.json(req.query)
  } catch(err) {
    console.error(err.message);
  }
})

app.listen( 5000, () => {
  console.log("server is starting on part 5000")
})

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );