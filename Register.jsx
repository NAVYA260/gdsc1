import React from 'react';
import './../Styles/Styles2.css'
import { Link } from 'react-router-dom';

const Register = () => {
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
            <div className="container">
                <div className="registration-box" id="organization-box">
                    <h2>Organization Registration</h2>
                    <form action="#" method="post" id="organization-form">
                        <label htmlFor="org-name">Organization Name:</label>
                        <input type="text" id="org-name" name="org-name" required placeholder="Enter organization name" /><br />

                        <label htmlFor="org-email">Email:</label>
                        <input type="email" id="org-email" name="org-email" required placeholder="Enter email" /><br />

                        <label htmlFor="org-password">Password:</label>
                        <input type="password" id="org-password" name="org-password" required placeholder="Enter password" /><br />

                        <label htmlFor="org-trust-name">Trust Name:</label>
                        <input type="text" id="org-trust-name" name="org-trust-name" required placeholder="Enter trust name" /><br />

                        <label htmlFor="org-address">Address:</label>
                        <input type="text" id="org-address" name="org-address" required placeholder="Enter address" /><br />

                        <label htmlFor="org-pincode">Pincode:</label>
                        <input type="text" id="org-pincode" name="org-pincode" required placeholder="Enter pincode" /><br />

                        <label htmlFor="org-phone">Phone Number:</label>
                        <input type="tel" id="org-phone" name="org-phone" required placeholder="Enter phone number" /><br />
                        <p>Already have an account?<Link to="/Login">Login</Link></p>
                        <div class="login-container">
                    <Link to="/Login" className="login-button">Register</Link>
                </div>
                    </form>
                </div>
                <div className="registration-box" id="donator-box">
                    <h2>Donator Registration</h2>
                    <form action="#" method="post" id="donator-form">
                        <label htmlFor="donor-name">Name:</label>
                        <input type="text" id="donor-name" name="donor-name" required placeholder="Enter your name" /><br />

                        <label htmlFor="donor-email">Email:</label>
                        <input type="email" id="donor-email" name="donor-email" required placeholder="Enter email" /><br />

                        <label htmlFor="donor-password">Password:</label>
                        <input type="password" id="donor-password" name="donor-password" required placeholder="Enter password" /><br />

                        <label htmlFor="donor-address">Address:</label>
                        <input type="text" id="donor-address" name="donor-address" required placeholder="Enter address" /><br />

                        <label htmlFor="donor-pincode">Pincode:</label>
                        <input type="text" id="donor-pincode" name="donor-pincode" required placeholder="Enter pincode" /><br />

                        <label htmlFor="donor-phone">Phone Number:</label>
                        <input type="tel" id="donor-phone" name="donor-phone" required placeholder="Enter phone number" /><br />
                        <p>Already have an account?<Link to="/Login">Login</Link></p>
                        <div class="login-container">
                    <Link to="/Login" className="login-button">Register</Link>
                </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;