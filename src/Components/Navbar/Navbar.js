import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import NoteContext from '../../Context/NoteContext';
import "./Navbar.css";
const Navbar = () => {
  const context = useContext(NoteContext);
  const { showAlert } = context;
  const navigate = useNavigate();
  let location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    showAlert("success", "Logged Out Successfully")
  }
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark d-flex align-content-center">
        <div className="container-fluid">
          <Link to="/"><img src="logo.png" width="170px" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse links position-relative" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link style={{fontSize:"1.2rem",fontWeight:"bolder"}} className={`nav-link  ${location.pathname === '/' ? "act  homeLink" : "homeLink"}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link style={{fontSize:"1.2rem",fontWeight:"bolder"}} className={`nav-link  ${location.pathname === '/about' ? "act  aboutLink" : "aboutLink"}`} aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item mx-3">
                <Link style={{fontSize:"1.2rem",fontWeight:"bolder"}} className={`nav-link  ${location.pathname === '/about' ? "act  aboutLink" : "aboutLink"}`} aria-current="page" to="/about">News</Link>
              </li>
              {!localStorage.getItem('token') ?
                <>
                  <Link style={{ right: "110px" }} className="btn btn-primary position-absolute log" to="/login" role="button">Login</Link>
                  <Link style={{ right: "10px" }} className="btn btn-primary position-absolute sign" to="/signup" role="button">SignUp</Link>
                </> : <button onClick={handleLogout}  style={{ right: "10px" }} className="btn btn-primary position-absolute lgout">Logout</button>
              }
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;
