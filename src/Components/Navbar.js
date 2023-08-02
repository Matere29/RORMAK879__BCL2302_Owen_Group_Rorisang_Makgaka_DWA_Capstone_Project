import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <nav 
        className = {props.darkMode ? "dark" : ""}
        >
            <img src = {logo} alt=" logo" className='nav-logo' />
            
            <h2 className="nav--logo_text">Pod Cast</h2>
        

      
            <ul className = 'navbar-menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/BlogPage">Blog</Link></li>
            <li><Link to="/ContactPage">Contact</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
            </ul>
            
            <div  className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            

        </nav>
    )


}