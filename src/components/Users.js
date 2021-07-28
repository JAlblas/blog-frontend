//import './Users.css';
//import User from './User';
import React from 'react';
import { useState, useEffect } from 'react';

function Users(props) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const authToken = JSON.parse(localStorage.getItem("token"))["token"];
    console.log("USE EFFECT TOKEN: ")
    console.log(authToken);
    fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + authToken
        }
      })
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch((error) => {
      console.error('Error:', error);
      localStorage.removeItem('token');
      
    });
  }, []);
  if (users.length === 0) {
      return "NO USERS";
  }

  return (
    <div className="users">
        {users.map(function(user, i){
            return <p>{user.email}</p>;
        })}
    </div>
  );
}

export default Users;
