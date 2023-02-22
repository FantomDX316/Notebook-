import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand ">Notebook</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="cred d-flex justify-content-end">
            {!localStorage.getItem('token')?
            <>
              <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link>
              <Link className="btn btn-primary" to="/signup" role="button">SignUp</Link>
            </>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>
            }
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar;
