import React from 'react'
import { useState, useEffect } from 'react';


const Data = () => {

 const [users, setUsers] = useState([]);

 useEffect(() => {
    fetch('http://localhost:3001/info')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, );
  return (
    <div >

        <div>
            <h2 className='text-center bg-body-secondary my-3'>This is the Page to Show the Information</h2>
        </div>
        <div className="container py-5 ">
  <div className="row">
    <div className="col-12 my-8">
      <table className="table table-bordered ">
        <thead className="bg-warning ">
          <tr className='border-2 border-primary '>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Name</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Age</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Email</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Pursuing</th>
            <th className="font-weight-bold border-2 border-primary text-center bg-warning">Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.email} className="bg-danger text-white border-2 border-primary cursor-pointer ">
              <td className="border-2 border-primary text-center bg-body-secondary ">{user.name}</td>
              <td className="border-2 border-primary text-center bg-body-secondary">{user.age}</td>
              <td className="border-2 border-primary text-center bg-body-secondary">{user.email}</td>
              <td className="border-2 border-primary text-center bg-body-secondary">{user.pursuing}</td>
              <td className="border-2 border-primary text-center align-items-center bg-body-secondary">
                <img src={`http://localhost:3001/images/${user.img}`} width="70" alt={user.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  )
}

export default Data