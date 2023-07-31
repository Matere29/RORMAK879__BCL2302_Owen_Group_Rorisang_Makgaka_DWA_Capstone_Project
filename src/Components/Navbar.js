import React from 'react';
import { Link } from "react-router-dom";
import mic from './Images/mic.png';


export default function Navbar(props) {
    return (
        <nav 
        className = {props.darkMode ? "dark" : ""}
        >
            <img src = {mic} alt=" logo" height="35px" width="35px" />
            
            <h3 className="nav--logo_text">Pod Cast</h3>
            <ul className = 'navbar-menu'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
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