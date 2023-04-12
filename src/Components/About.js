import React, { useEffect } from 'react';
import "./About.css";
import "./About.css"
import ParticlesBg from 'particles-bg';

const About = () => {

    useEffect(() => {
        document.title = "Notebook : About";
    }, []);
    return (
        <>
            <div className="noteImage">
                <div className="container d-flex justify-content-center ">
                    <div className="aboutPage m-5 ">
                        <h1 style={{ color: "blue", fontWeight: "bolder", textDecoration: "underline", paddingLeft: "20px" }}>Notebook</h1>
                        <p style={{ color: "green", fontWeight: "bolder", fontSize: "1.5rem", padding: "20px" }}>Notebook Application lets the user create user specific Notes, it can be either your daily tasks reminder or it can be your personal diary or it can be whatever you want to be, allowing you to access your notes from anywhere, Notebook is accessible to user itself and is not visible to other unless user provides access to someone else.</p>
                        <p style={{ color: "red", fontWeight: "bolder", fontSize: "1.3rem", textAlign: "center" }} >Are you Excited! Yeah there is no need of pen and paper for your notes</p>
                        <h2 style={{ color: "blue", fontWeight: "bolder", textDecoration: "underline", paddingLeft: "20px" }}>Tech Stack</h2>
                        <ul style={{ fontSize: "1.5rem", fontWeight: "bold", paddingLeft: "40px" }} >
                            <li>Frontend - HTML, CSS, JS, ReactJS</li>
                            <li>Backend - JS, NodeJS, ExpressJS, MongoDB</li>
                        </ul>

                    </div>
                </div>
            </div>
            <ParticlesBg type="cobweb" bg={true} />



        </>
    )
};
export default About;