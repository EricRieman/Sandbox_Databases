import React, { useState } from "react";

//instead os using props.todo, we can destructure the todo object using {todo}
const EditTodo = ({todo}) => {
  const[ description, setDescription] = useState(todo.description)

  const updateDescription = async e => {
    e.preventDefault()
    try {
      const body = {description}
      const resp = await fetch(`http://localhost:5000/sandbox/${todo.todo_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })

      console.log(resp)
      window.location = "/" //refreshes page so we can see changes
    } catch (err) {
      console.error(err.message)
    }
  }
  
  return (
    <>
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
        Edit
      </button>

      {/*
        when a model is opened, it targets a specific id. in order to correlate the proper id to model dialog,
        we can set the modal id before to the todo_id that is pased in. For example, with a todo_id of 10, we 
        assign the modal is to 'id10' then use '#id10' to target the model in button above.
      */}

      <div className="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Edit todo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <input type="text" className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
            </div>

            <div className="modal-footer">
              
              <button type="button" className="btn btn-warning" onClick={e => updateDescription(e)}>Save</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EditTodo;
