import React from 'react'
import './login.css';
function Login() {
    return (
        <div>
            
            <div class="login-container">
          <h2>Login</h2>
          <form action="#" method="post">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
                </input>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                </input>
            </div>
            <button type="submit">Login</button>
         </form>
         </div>
        </div>
    )
}

export default Login
