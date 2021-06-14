import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("hello")
  
  const onSubmitForm = async e => {
    e.preventDefault()
    try {
      const body = {description}
      const resp = await fetch("http://localhost:5000/sandbox",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })

      console.log(resp);
      window.location = "/" //refreshes page so we can see changes
    } catch (err) {
      console.error(err.message)
    }
  }
  
  return (
    <>
      <h1 className="text-center mt-5">Pern ToDo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm} >
        <input type ="text" className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button className = "btn btn-success ml-2">Add</button>
      </form>
    </>
  )
}

export default InputTodo;
