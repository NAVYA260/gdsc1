import React from 'react';
import './../Styles/Styles3.css'
import { Link } from 'react-router-dom';

const Login = () => {
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
        <div class="container">
        <div class="registration-box" id="organization-box">
            <h2>Organization Login</h2>
            <form action="#" method="post" id="organization-form">
                <label for="org-email">Email:</label>
                <input type="email" id="org-email" name="org-email" required placeholder="Enter email"/><br />

                <label for="org-password">Password:</label>
                <input type="password" id="org-password" name="org-password" required
                    placeholder="Enter password" class="password-input"/><br />

                <div class="login-container">
                    <a href="OrgLogin" class="login-button">Login</a>
                </div>
            </form>
        </div>
        <div class="registration-box" id="donator-box">
            <h2>Donator Login</h2>
            <form action="#" method="post" id="donator-form">

                <label for="donor-email">Email:</label>
                <input type="email" id="donor-email" name="donor-email" required placeholder="Enter email"/><br />

                <label for="donor-password">Password:</label>
                <input type="password" id="donor-password" name="donor-password" required
                    placeholder="Enter password" class="password-input"/><br />

                <div class="login-container">
                    <Link to="/WhatToDonate" class="login-button">Login</Link>
                </div>
            </form>
        </div>
        </div>
        </div>
    );
};

export default Login;