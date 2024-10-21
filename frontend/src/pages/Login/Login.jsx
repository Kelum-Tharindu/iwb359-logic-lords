import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; 

const Login = () => {
    // State to manage email and password inputs
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    // Function to handle input changes
    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // Function to handle submit button click
    const handleSubmitClick = async () => {
        try {
            // console.log(values.email+"===="+values.password)
            // Send a POST request to the login API
            const response = await axios.post('http://localhost:3000/auth/login', values);
            if (response.status === 201) {
                // If the login is successful, redirect to the home page
                alert('Login successful');
                navigate('/');
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder='Enter Email'
                        name="email" 
                        value={values.email} // Bind input value to state
                        onChange={handleChanges} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        placeholder='Enter Password'
                        name="password" // Make sure to specify the name attribute
                        value={values.password} // Bind input value to state
                        onChange={handleChanges} // Handle changes
                    />
                </div>
                <button className="submit-btn" onClick={handleSubmitClick}>Submit</button>
                <div className="signup-container">
                    <span>Don't Have an Account? </span>
                    <Link to='/register'>Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
