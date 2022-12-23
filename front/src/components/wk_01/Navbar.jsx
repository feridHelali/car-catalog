import React from 'react'
import Badge from "./Badge";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Cars</Link> 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  aria-current="page" to="/">Home
                </Link>
              </li>
              <li className="nav-item">
              <Link 
                  className="nav-link" 
                  aria-current="page" to="/car-list">Cars
                </Link>
              </li>
              <li className="nav-item">
              <Link 
                  className="nav-link" 
                  aria-current="page" to="/contact">Contact US
                </Link>
              </li>
              <li className="nav-item">
              <Link 
                  className="nav-link" 
                  aria-current="page" 
                  to="/about">About US
                </Link>
              </li>
             
            </ul>
          </div>
        
      <Badge />
      </nav>
    </div>
  )
}

export default Navbar
