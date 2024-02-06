import React from 'react';
import './../Styles/Styles4.css'
import { Link } from 'react-router-dom';

const WhatToDonate = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="container">
                    <div class="logo">Hunger Help</div>
                    <ul class="nav-links">
                        <li><Link to="/WhatToDonate">Home</Link></li>
                        <li><Link to="/AboutUs">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
            <main>
                <div class="box">
                    <img src="https://foundationmag.ca/wp-content/uploads/2020/10/iStock-1181962948_w.jpg" alt="Donate Food Image" />
                    <h2>DONATE FOOD</h2>
                    <Link to="/OrgNames1" class="Donatebutton">DONATE</Link>
                </div>
                <div class="box">
                    <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D" alt="Donate Amount Image" />
                    <h2>DONATE AMOUNT</h2>
                    <Link to="/OrgNames3" class="Donatebutton">DONATE</Link>
                </div>
            </main>
        </div>
    );
};

export default WhatToDonate;