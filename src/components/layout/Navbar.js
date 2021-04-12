import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="/About" exact>About</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact" exact>Contact</NavLink>
      </li>


  
    </ul>
    <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
  </div>
</nav>
        </div>
    )
}
