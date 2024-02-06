import React from 'react';
import './../Styles/Styles5.css'
import { Link } from 'react-router-dom';

const OrgNames1 = () => {
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
            <div class="container1">
                <div class="organization-card">
                    <h2>Akshaya Patra Foundation</h2>
                    <img src="https://yt3.googleusercontent.com/ytc/AIf8zZQM1gDmjpexxCvUnJJUVqxrhBHULULUgF8PYXvzwg=s900-c-k-c0x00ffffff-no-rj" alt="Organization 1" class="organization-image" />
                    <Link to="/org1food" class="Donatebutton">More</Link>
                </div>
                <div class="organization-card">
                    <h2>Deepalaya Foundation</h2>
                    <img src="https://content.jdmagicbox.com/comp/delhi/k5/011pxx11.xx11.110307170845.v6k5/catalogue/deepalaya-corporate-office-janakpuri-delhi-ngos-q3jzxarr2t-250.jpg" alt="Organization 2" class="organization-image" />
                    <Link to="/org2food" class="Donatebutton">More</Link>
                </div>

                <div class="organization-card">
                    <h2>Feeding India Foundation</h2>
                    <img src="https://media.licdn.com/dms/image/C4D03AQHag2GiDcOoPQ/profile-displayphoto-shrink_800_800/0/1598976463645?e=2147483647&v=beta&t=J5d50jg_eEFsfQn0NayEYRDb6WpP3-VDFhnKFSqkLkA" alt="Organization 2" class="organization-image" />
                    <Link to="/org3food" class="Donatebutton">More</Link>
                </div>
            </div>

        </div>
    );
};

export default OrgNames1;