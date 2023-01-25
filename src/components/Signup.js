import React, {useState } from "react";

export default function Signup (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setName(value);
        }
       
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <div className="auth-form-container">
            <h2>Signup</h2>
            <form className= "signup-form" onSubmit={handleSubmit}>
                <label htmlFor="name" > </label>
                <input value={name} onChange = {(e) => handleInputChange(e)} name="name" id="name" type="text" placeholder="Full Name" />
                <label htmlFor="email" > </label>
                <input value={email} onChange = {(e) => handleInputChange(e)}  type="email" placeholder="your email address" id = "email" name="email"/>
                <label htmlFor="password" > </label>
                <input value={password} onChange = {(e) => handleInputChange(e)} type="password" placeholder="your password" id = "password" name="password" />
                <input value={confirmPassword} onChange = {(e) => handleInputChange(e)} type="password" placeholder="confirm password" id = "confirmPassword" name="confirmPassword" />
                <button> Signup </button>

            </form>

            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
            </div>
    )
}