import React from 'react';
import './../Styles/Styles5.css'
import { Link } from 'react-router-dom';

const ThankyouFood = () => {
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

            <div class="thank-you-container">
                <img src="https://cdn1.iconfinder.com/data/icons/vibrancie-action/30/action_027-checkmark-done-check-finish-512.png" alt="Thank You" class="thank-you-image" />
                <p class="thank-you-statement">Thank you for your generous donation!</p>
            </div>
        </div>
    );
};

export default ThankyouFood;