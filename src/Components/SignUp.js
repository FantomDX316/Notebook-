import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from "../Context/NoteContext";
import "./SignUp.css"
import ParticlesBg from 'particles-bg'

const SignUp = () => {
    useEffect(() => {
        document.title = "Notebook : Signup";
    })
    const context = useContext(NoteContext);
    const host = "http://localhost:5000";
    // const host = "https://notebookbackend.onrender.com";
    const navigate = useNavigate();
    const { showAlert } = context;
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/emailVerify`, { //create_user
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const data = await response.json();
        console.log(data);
        // const token = await response.json();
        // if (token.success) {
        //     localStorage.setItem('token', token.authToken);
        //     showAlert("success", "Signed Up Successfully");
        //     navigate('/');
        // }
        // else {
        //     showAlert("danger", "Error Signing Up");

        // }

    }
    return (
        <>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="signup d-flex justify-content-center flex-column align-items-center overflow-hidden">
                    <h1 style={{ fontWeight: "bolder" }} className="mx-5">SignUp with your credentials</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="container mx-5">
                            <div className="form-group my-3 ">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" onChange={handleChange} value={credentials.name} name="name" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" style={{ width: "300px" }} required />

                            </div>
                            <div className="form-group my-3 ">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" onChange={handleChange} value={credentials.email} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail" style={{ width: "300px" }} required />

                            </div>
                            <div className="form-group ">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" onChange={handleChange} value={credentials.password} id="password" name="password" placeholder="Password" style={{ width: "300px" }} required />
                            </div>
                            <button type="submit" className="btn btn-primary my-2">Signup</button>
                        </div>

                    </form>
                </div>
            </div>
            <ParticlesBg type="fountain" bg={true} />

        </>
    )
};
export default SignUp;