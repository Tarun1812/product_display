import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <Link className="navbar-brand" to="/">Product Home</Link>
            </div>
            <ul className="nav navbar-nav">
            <li><Link to="/product">ProductPage</Link></li>
            </ul>
           
            <div className="form-group navbar-left ">
                <input type="text" className="form-control" placeholder="Search" name="search"/>
            </div>
           
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header