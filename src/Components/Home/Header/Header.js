import React from 'react';
import './Header.css';
import Navbar from '../../Navbar/Navbar';
import Frame from '../../images/logos/Frame.png';


const Header = () => {
    return (
        <div className=" header-container">
            <Navbar></Navbar>
            <main style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#111430', fontWeight: 'bold' }}>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Purus commodo ipsum duis <br />laoreet maecenas. Feugiat</p>
                    <button style={{ width: '40%' }} className="btn btn-primary btn-lg">Hire us</button>
                </div>
                <div className="col-md-6">
                    <img src={Frame} alt="" className="img-fluid" />
                </div>
            </main>

        </div>
    );
};

export default Header;