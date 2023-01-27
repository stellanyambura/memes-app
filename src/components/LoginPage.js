import React, {useState} from "react";


export default function LoginPage (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="auth-form-container container-fluid bg-dark">
            <h2 className="navbar-brand text-light" style={{fontSize: "1.5rem"}}>Login</h2>{"\n"}
            <form className= "login-form" onSubmit={handleSubmit}>
                <input className="mb-3" value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Your email address" id = "email" />
                <input className="mb-3" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" id = "password" />
                <button> Login</button>
            </form>
            <button className="link-btn btn btn-outline-info ms-1" onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup</button>
                  <h1 style={{fontSize: "8rem"}}>Use the NavBar at the top to login and View Some Memes!</h1>
        </div>
    )
}