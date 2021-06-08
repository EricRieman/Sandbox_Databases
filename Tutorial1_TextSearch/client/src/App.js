import React, {Fragment, useState} from 'react';

const App = () => {

  const [name, setName] = useState("")
  const [users, setUsers] = useState([])

  const onSubmitForm = async(e) => {
    e.preventDefault()
    try {
      const resp = await fetch(`http://localhost:5000/sandbox/?inputName=${name}`)     
      const respJson = await resp.json();

      setUsers(respJson)

    } catch(err) {
      console.log(err)
    }
  }

  return (
    <Fragment>
      <div className = "container text-center" >
        <h1 className = "my-5">Party List</h1>
        <form className ="d-flex" onSubmit={onSubmitForm}>
          <input 
            type ="text" 
            name = "name" 
            placeholder="Enter user" 
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className ="btn btn-success">Submit</button>
        </form>
        <table className ='table my-5'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            { users.map( user => (
                <tr key={user.user_id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && <p>No Results found</p>}
      </div>
    </Fragment>
  )
}

export default App;

//30:18