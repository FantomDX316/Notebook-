import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../../Context/NoteContext';
import "./Login.css";
import ParticlesBg from 'particles-bg'
import loading from "./Book.gif"


const Login = () => {

    useEffect(() => {
        document.title = "Notebook : Login";
    });

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [forgotEmail, setForgotEmail] = useState("");
    const navigate = useNavigate();
    const context = useContext(NoteContext);
    const [forgotComp, setForgotComp] = useState(false);
    const [passComp, setPassComp] = useState(false);
    const [pass,setPass] = useState("");
    const [fetching, setFetching] = useState(false);
    const [otpComp, setOtpComp] = useState(false);
    const [otp, setOtp] = useState("");

    const { showAlert } = context;
    //development url
    // const host = process.env.REACT_APP_DEV_API_URL;

    //production url
    const host = process.env.REACT_APP_BASE_API_URL;

    //otp Change
    const otpChange = (e) => {
        setOtp(e.target.value);

    }

    //otp submit
    const otpSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/otpVerify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "oneTimePassword": otp, email: forgotEmail })
        });
        const data = await response.json();
        console.log(data);
        if (data.success) {
            setPassComp(true);
            setOtpComp(false);
        } else {
            showAlert("danger", "Invalid Credentials");
            navigate("/");
        }

    }


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

    //passChange
    const passChange = (e) => {
        setPass(e.target.value);
    }

    //passSubmit
    const passSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/changePassword`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:forgotEmail,password:pass})
        });
        const data = await response.json();
        if(data.success){
            navigate("/");
            showAlert("success","Password Changed Successfully");
        }else{
            navigate("/");
            showAlert("danger",data.error);
        }
    }

    //forgotchange
    const forgotChange = (e) => {
        setForgotEmail(e.target.value);

    }
    //forgotsubmit
    const forgotSubmit = async (e) => {
        e.preventDefault();
        setFetching(true);

        const response = await fetch(`${host}/api/auth/forgotVerify`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ forgotEmail })
        });
        const data = await response.json();
        console.log(data);
        if (data.success) {
            setFetching(false);
            setForgotComp(false);
            setOtpComp(true);
        } else {
            showAlert("danger", data.error);
            setFetching(false);
            setOtpComp(false);
            setForgotComp(false);

        }
    }
    if (fetching) {
        return (
            <>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="login d-flex justify-content-center flex-column align-items-center overflow-hidden">
                        <img src={loading} alt="loading" />
                        <h1 style={{ fontWeight: "bolder" }} className="mx-5">Sending OTP...</h1>
                    </div>
                </div>
                <ParticlesBg type="fountain" bg={true} />

            </>
        );
    } else if (otpComp) {
        return (
            <>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="login d-flex justify-content-center flex-column align-items-center overflow-hidden">
                        <h1 style={{ fontWeight: "bolder" }} className="mx-5">Enter OTP sent to your mail</h1>
                        <form onSubmit={otpSubmit}  >
                            <div className="container mx-5">
                                <div className="form-group my-3 ">
                                    <input type="text" className="form-control" onChange={otpChange} value={otp} name="otp" id="otp" aria-describedby="emailHelp" placeholder="OTP" style={{ width: "300px" }} required />
                                </div>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ParticlesBg type="fountain" bg={true} />

            </>
        );
    }
    else if (forgotComp) {
        return (
            <>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="login d-flex justify-content-center flex-column align-items-center overflow-hidden">
                        <h1 style={{ fontWeight: "bolder" }} className="mx-5">Enter Your Email to verify</h1>
                        <form onSubmit={forgotSubmit}  >
                            <div className="container mx-5">
                                <div className="form-group my-3 ">
                                    <input type="email" className="form-control" onChange={forgotChange} value={forgotEmail} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" style={{ width: "300px" }} required />
                                </div>
                                <button type="submit" className='btn btn-primary'>Send OTP</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ParticlesBg type="fountain" bg={true} />

            </>
        );
    }
    else if (passComp) {
        return (
            <>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="login d-flex justify-content-center flex-column align-items-center overflow-hidden">
                        <h1 style={{ fontWeight: "bolder" }} className="mx-5">Enter New Password</h1>
                        <form onSubmit={passSubmit}  >
                            <div className="container mx-5">
                                <div className="form-group my-3 ">
                                    <input type="password" className="form-control" onChange={passChange} value={pass} aria-describedby="emailHelp" placeholder="Enter New Password" style={{ width: "300px" }} required />
                                </div>
                                <button type="submit" className='btn btn-primary'>Change Password</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ParticlesBg type="fountain" bg={true} />

            </>
        )
    }
    else {
        return (
            <>
                <div className="container mt-5 d-flex justify-content-center">
                    <div className="login d-flex justify-content-center flex-column align-items-center overflow-hidden">
                        <h1 style={{ fontWeight: "bolder" }} className="mx-5">Login with your credentials</h1>
                        <form onSubmit={handleSubmit}  >
                            <div className="container mx-5">
                                <div className="form-group my-3 ">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" onChange={handleChange} value={credentials.email} name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" style={{ width: "300px" }} required />

                                </div>
                                <div className="form-group ">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" onChange={handleChange} value={credentials.password} name="password" placeholder="Password" style={{ width: "300px" }} required />
                                </div>
                                <div style={{ width: "300px" }} className="buttons d-flex justify-content-center align-items-center flex-column">
                                    <button type="submit" style={{ width: "100px" }} className="btn btn-primary my-2">Login</button><br />
                                    <h6 onClick={() => {
                                        setForgotComp(true);
                                    }} style={{ cursor: "pointer" }}>Forgot Password </h6>
                                </div>


                            </div>

                        </form>
                    </div>
                </div>
                <ParticlesBg type="fountain" bg={true} />
            </>
        );
    }


}
export default Login;