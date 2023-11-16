import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="fw-bold navbar-brand" to="/">TODO APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="fw-bold nav-link active" aria-current="page" to="/">ADD-TODO</Link>
        </li>
        <li className="nav-item">
          <Link className="fw-bold nav-link" to="/todos">SHOW-TODO</Link>
        </li>
        
        <li className="nav-item">
          <Link className="fw-bold nav-link" to="/auth/login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="fw-bold nav-link" to="/auth/register">SIGN-UP</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    </>
  )
}
