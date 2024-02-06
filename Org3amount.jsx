import React from 'react';
import './../Styles/Styles7.css'
import { Link } from 'react-router-dom';
const Org3amount = () => {
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

            <div class="containers">
                <div class="big-card">
                    <div class="organization-details">
                        <h2>Feedind India Foundation</h2>
                        <p>
                            Feeding India, a Zomato giveback, is a not for profit organization, designing interventions to
 /                           reduce hunger among underserved communities in India. In January 2019, Zomato and Feeding India
                            (registered as Hunger Heroes) collaborated to e/radicate hunger and malnutrition in India.
                        </p>
                        <p>
                            Despite the significant progress India has made, a large number of people still face the risk of
                            food insecurity. The COVID-19 pandemic has further exacerbated the challenge of hunger in our
                            country.

                            As a response to t/he devastating consequences of the pandemic, Feeding India by Zomato launched the

                            Daily Feeding Program in January 2021
                            to p/rovide daily meal support to t/he most vulnerable families.


                        </p>
                        <p> Under this program, Feeding India has served 4.3+ crore meals with the main focus on reducing hunger
                            for the most vulnerable. This has been enabled with the support of over 140 NGO partners spread
                            across 40 cities in the country.</p>
                        <p>ADDRESS and CONTACT NUMBER:
                            <ul>
                                <li>New Delhi,Delhi and 098711 78810</li>
                                <li>Bengaluru, Karnataka and 099027 99027</li>
                                <li>Hazaribagh, Jharkhand and 080927 44870</li>
                            </ul>
                        </p>
                    </div>
                    <div class="organization-images">
                        <img src="https://imageio.forbes.com/blogs-images/thumbnails/blog_1789/pt_1789_6728_o.jpg?format=jpg&height=900&width=1600&fit=bounds"
                            alt="Organization 1" class="organization-image" height="500px" />
                    </div>
                </div>
                <div class="button-container">
                    <Link to="/AmountTransfer" class="action-button">Make Payment</Link>
                </div>
            </div>
        </div>
    );
};

export default Org3amount; 