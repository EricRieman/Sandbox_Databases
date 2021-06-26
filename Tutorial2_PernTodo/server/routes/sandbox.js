/***Routes***
  We can use regualr expressions in these strings
  "/abc" - handles abd
  "/ab?cd" - handles /acd or abcd (? means to include 0 or all of the char that comes before it )
  "/ab+cd" - handles /abcd, abbbcd, abbbbbbcd (? means to include 1 or more of the char that comes before it )
  "/ab*cd" - "/ab" + anything + "cd"
  /a/ - RegExp" anything that contains a
  /.*man$/ - RegExp: anything that ends with "man"
*/

"use strict"
const express = require("express")
let router = express.Router()
const pool = require("../db")

//we can put middle ware in this file, it will only be invoked when accessing through this route
router.use((req, res, next)=>{
  console.log(req.url, "@", Date.now())
  next();
})

router.use(express.json()) //#TODO: Do i need this?

const getTodo = async(req, res) => {
  try {
    const {id} = req.params
    const todo = await pool.query("SELECT * FROM todos WHERE todo_id = $1", [id])

    res.json(todo.rows[0])
  } catch(err) {
    console.error(err.message)
  }
}

const updateTodo = async(req, res) => {
  try {
    const {id} = req.params
    const {description} = req.body

    const updateTodo = await pool.query("UPDATE todos SET description = $1 WHERE todo_id = $2", [description, id])

    res.json(updateTodo.rows[0])
  } catch(err) {
    console.error(err.message)
  }
}

const deleteTodo = async(req, res) => {
  try {
    const {id} = req.params
    const deleteTodo = await pool.query("DELETE FROM todos WHERE todo_id = $1", [id])

    res.json("todo was deleted")
  } catch(err) {
    console.error(err.message)
  }
}

const getAllTodos = async(req, res) => {
  try {
    console.log("get all todos")

    const allTodos = await pool.query("SELECT * FROM todos")

    res.json(allTodos.rows)
  } catch(err) {
    console.error(err.message)
  }
}

const createTodo = async(req, res) => {
  try {
    const {description} = req.body
    const newTodo = await pool.query("INSERT INTO todos (description) VALUES($1) RETURNING *", [description])

    res.json(newTodo.rows[0])
  } catch(err) {
    console.error(err.message)
  }
}

router.route("/")
  .get( getAllTodos )
  .post( createTodo )

// the :id below allows our url to be dynamic, and gives us access to req.params
// this url's req.params is "random" http://localhost:5000/sandbox/random
router.route("/:id")
  .get( getTodo )   
  .put( updateTodo )
  .delete( deleteTodo )

module.exports = router