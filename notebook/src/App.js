import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';



function App() {

    return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert/>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
          </Routes>
        </Router>
      </NoteState>

    </>
  );
}

export default App;
