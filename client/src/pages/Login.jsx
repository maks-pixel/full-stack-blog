import React from 'react';
import {Link} from 'react-router-dom';
const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username" />
                <input required type="password" placeholder="password" />
                <button>login</button>
                <p>There is an error!</p>
                <span>Dont you have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login