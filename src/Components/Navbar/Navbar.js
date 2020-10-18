import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/images/logos/logo.png';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav  className="navbar navbar-expand-lg navbar-light offset-md-1">
            <img style={{ width: '15%' }} className="navbar-brand img-fluid" src={Logo} alt="Logo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                       
                        <Link to="/order" class="nav-link mr-5" href="#">Contact Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/Login"> <button type="button mr-5 className="  class="btn btn-dark">Login</button></Link>
                       
                    </li>

                </ul>


            </div>
        </nav>
    );
};

export default Navbar;