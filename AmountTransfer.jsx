import React from 'react';
import './../Styles/Styles8.css'
import { Link } from 'react-router-dom';

const AmountTransfer = () => {
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
    <div class="payment-form">
        <h2>Make Payment</h2>
        <label for="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full-name" required/>

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required/>

        <label for="city">City:</label>
        <input type="text" id="city" name="city" required/>

        <label for="zip-code">Zip Code:</label>
        <input type="text" id="zip-code" name="zip-code" required/>

        <label for="zip-code">Enter Amount:</label>
        <input type="text" id="zip-code" name="zip-code" required/>
        <h3>Payment Information</h3>

        <label for="card-number">Card Number:</label>
        <input type="text" id="card-number" name="card-number" required/>

        <div class="card-details">
            <div>
                <label for="expiration-date">Expiration Date:</label>
                <input type="text" id="expiration-date" name="expiration-date" required/>
            </div>
            <div>
                <label for="cvc">CVC:</label>
                <input type="text" id="cvc" name="cvc" required/>
            </div>
        </div>
        <Link to="/Thankyoufood" className="make-payment-button">Make Payment</Link>
    </div>
        </div>
    );
};

export default AmountTransfer;