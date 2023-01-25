import React, {useState} from "react";


export default function LoginPage (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className= "login-form" onSubmit={handleSubmit}>
                <label htmlFor="email" > </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="your email address" id = "email" name="email"/>
                <label htmlFor="password" > </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your password" id = "password" name="password" />
                <button> Login</button>

            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup</button>
            </div>
    )
}