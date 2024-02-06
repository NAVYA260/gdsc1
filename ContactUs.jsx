import React from 'react';
import './../Styles/Styles10.css'
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>

            <nav class="navbar">
                <div class="container">
                    <div class="logo">Hunger Help</div>
                    <ul class="nav-links">
                        <li><Link to="/WhatToDonate">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/ContactUs">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
            <div class="containers">

                <h2>Our Contact Information</h2>

                <p>Feel free to reach out to us using the contact details below:</p>

                <ul class="contact-info">
                    <li><strong>Email:</strong> info@example.com</li>
                    <li><strong>Phone:</strong> +1 (123) 456-7890</li>
                    <li><strong>Address:</strong> 123 Street, Cityville, Country</li>
                </ul>

                <p>If you have any questions or concerns, please don't hesitate to get in touch with us. We'll do our best to assist you.</p>

                <div class="social-icons">
                    <div class="social-icon">
                        <a href="https://twitter.com/example" target="_blank">
                            <img src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png" alt="Twitter" />
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="https://instagram.com/example" target="_blank">
                            <img src="https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png" alt="Instagram" />
                        </a>
                    </div>
                    <div class="social-icon">
                        <a href="https://facebook.com/example" target="_blank">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;