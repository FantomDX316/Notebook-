import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../Context/NoteContext';
import "./Login.css";

const Login = () => {

    useEffect(() => {
        document.title = "Notebook : Login";
    });
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const context = useContext(NoteContext);
    const { showAlert } = context;
    const host = "http://localhost:5000";
    //    const host = "https://notebookbackend.onrender.com";

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const token = await response.json();
        if (token.success) {
            localStorage.setItem("token", token.authToken);
            showAlert("success", "Successfully logged in");
            navigate("/");
        }
        else {
            showAlert("danger", "Invalid Credentials");

        }
    }
    return (
        <>

            <div className="container mt-5 d-flex justify-content-center">
                <div className="login d-flex justify-content-center flex-column align-items-center">
                    <h1 style={{fontWeight:"bolder"}} className="mx-5">Login with your credentials</h1>
                    <form onSubmit={handleSubmit}  >
                        <div className="container mx-5">
                            <div className="form-group my-3 ">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" onChange={handleChange} value={credentials.email} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" style={{width:"300px"}} required />

                            </div>
                            <div className="form-group ">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" onChange={handleChange} value={credentials.password} name="password" placeholder="Password" style={{width:"300px"}} required />
                            </div>
                            <button type="submit" className="btn btn-primary my-2">Login</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}
export default Login;