import './Register.css';

function Register() {

  return (
        <form action="http://localhost:3000/signup" method="post">
            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required/>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" require/>

            <button type="submit">Signup</button>
        </form>
    );
}

export default Register;

