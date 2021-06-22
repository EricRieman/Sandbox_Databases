const express = require("express")
const cors = require("cors")
const app = express()
const pool = require("./db")

//middle ware
app.use(cors())
app.use(express.json())

//***Routes***
//Test on postman: http://localhost:5000/sandbox

//create a todo
app.post("/sandbox", async(req, res) => {
  try {
    const {description} = req.body
    const newTodo = await pool.query("INSERT INTO todos (description) VALUES($1) RETURNING *", [description])

    res.json(newTodo.rows[0])
  } catch(err) {
    console.error(err.message)
  }
})

//get all todos
app.get("/sandbox", async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todos")

    res.json(allTodos.rows)
  } catch(err) {
    console.error(err.message)
  }
})

//get a todo
// the :id below allows our url to be dynamic, and gives us access to req.params
// this url's req.params is "random" http://localhost:5000/sandbox/random
app.get("/sandbox/:id", async(req, res) => {
  try {
    const {id} = req.params
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id])

    res.json(todo.rows[0])
  } catch(err) {
    console.error(err.message)
  }
}) 

//update a todo
app.put("/sandbox/:id", async(req, res) => {
  try {
    const {id} = req.params
    const {description} = req.body

    const updateTodo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id])

    res.json(updateTodo.rows[0])
  } catch(err) {
    console.error(err.message)
  }
})

//delete a todo
app.delete("/sandbox/:id", async(req, res) => {
  try {
    const {id} = req.params
    const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id])

    res.json("todo was deleted")
  } catch(err) {
    console.error(err.message)
  }
})

app.listen( 5000, () => {
  console.log("server is starting on port 5000")
})