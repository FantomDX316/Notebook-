import React, {useState,useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from "../Context/NoteContext";

const SignUp = () => {
    useEffect(()=>{
        document.title = "Notebook : Signup";
    })
    const context = useContext(NoteContext);
    const navigate = useNavigate();
    const {showAlert} = context;
    const [credentials,setCredentials] = useState({name:"",email:"",password:""});
    const handleChange = (e)=>{
            setCredentials({...credentials,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e)=>{
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/auth/create_user",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
            });
            const token = await response.json();
            if(token.success){
                localStorage.setItem('token',token.authToken);
                showAlert("success","Signed Up Successfully");
                navigate('/');
            }
            else{
                showAlert("danger","Error Signing Up");
                
            }

    }
    return (
        <>
            <div className="container">
                <h1 className="mx-5">SignUp with your credentials</h1>
                <form onSubmit={handleSubmit}>
                    <div className="container mx-5">
                    <div className="form-group my-3 ">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" onChange={handleChange} value={credentials.name} name="name" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" required />

                        </div>
                        <div className="form-group my-3 ">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" onChange={handleChange} value={credentials.email}    name="email" id="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail" required />

                        </div>
                        <div className="form-group ">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" onChange={handleChange} value={credentials.password} id="password"   name="password" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn btn-primary my-2">Signup</button>
                    </div>

                </form>
            </div>

        </>
    )
};
export default SignUp;