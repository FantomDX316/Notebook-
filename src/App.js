import React from 'react'
import "./App.css"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import News from './Components/News/News';
import NoteState from './Context/NoteState';
import Alert from './Components/Alert/Alert';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Tilt from "react-parallax-tilt";


function App() {

  return (
    <>
      <NoteState>

        <Router>
          <Navbar />
          <div style={{ height: "5vh" }} className="container">
            <Alert />
          </div>
          <div className="log d-flex justify-content-center mt-3">
            <Tilt>
              <img src="logo2.png" width="300px" alt="logo" />
            </Tilt>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/news" element={<News />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
          </Routes>
        </Router>




      </NoteState>


    </>
  );
}

export default App;
