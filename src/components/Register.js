import './Register.css';
import React from 'react';

function Register() {

  return (
        <form action="http://localhost:3000/signup" method="post">
            <label>
                <p>Email</p>
                <input type="email" placeholder="Enter Email" name="email" required/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" require/>
            </label>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    );
}

export default Register;
