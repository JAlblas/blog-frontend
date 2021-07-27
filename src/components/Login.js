import './Login.css';
import React from 'react';

export default function Login() {
  return(
    <form action="http://localhost:3000/login" method="post">
      <label>
        <p>Email</p>
        <input type="email" placeholder="Enter Email" name="email" required/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" require/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}