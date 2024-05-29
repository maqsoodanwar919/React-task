import React from 'react'
import {  Link} from "react-router-dom";
const header = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="/Contact" >Get Axios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Post" >Post Axios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create" >Create Axios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/read" >Read Axios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/edit" >Edit Axios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event" >Handling Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/formik" >Formik Form</Link>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    </>
  )
}

export default header