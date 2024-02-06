import React from 'react';
import './../Styles/Styles11.css'
import { Link } from 'react-router-dom';

const OrgLogin = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="container">
                    <div class="logo">Hunger Help</div>
                    <ul class="nav-links">
                        <li><Link to="/Register">Home</Link></li>
                        <li><Link to="/AboutUs">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>

            <div class="containers">
                <div class="card1">
                    <h2>Food Donor 1</h2>
                    <p class="donor-info">Location: Cityville</p>
                    <p class="donor-info">Contact: John Doe</p>
                    <p class="donor-info">Phone: +1 (123) 456-7890</p>
                    <p class="donor-info">Email: john.doe@example.com</p>
                </div>
                <div class="card2">
                    <h2>Food Donor 2</h2>
                    <p class="donor-info">Location: Townsville</p>
                    <p class="donor-info">Contact: Jane Smith</p>
                    <p class="donor-info">Phone: +1 (987) 654-3210</p>
                    <p class="donor-info">Email: jane.smith@example.com</p>
                </div>
                <div class="card2">
                    <h2>Food Donor 2</h2>
                    <p class="donor-info">Location: Townsville</p>
                    <p class="donor-info">Contact: Jane Smith</p>
                    <p class="donor-info">Phone: +1 (987) 654-3210</p>
                    <p class="donor-info">Email: jane.smith@example.com</p>
                </div>

            </div>

        </div>
    );
};

export default OrgLogin;