import './Login.css';

function Login() {

  return (
        <form action="http://localhost:3000/login" method="post">
            <label for="email"><b>email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required/>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" require/>

            <button type="submit">Login</button>
        </form>
    );
}

export default Login;

