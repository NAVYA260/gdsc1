import React from 'react';
import './../Styles/Styles6.css'
import { Link } from 'react-router-dom';

const Org1food = () => {
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
                        <h2>Akshaya Patra Foundation</h2>
                        <p>
                            The Akshaya Patra Foundation is a not-for-profit organisation headquartered
                            in Bengaluru, India. The Foundation strives to eliminate classroom hunger by implementing
                            the PM POSHAN (Mid-Day Meal ) Programme. It provides nutritious meals to children studying
                            in government schools and government-aided schools. Akshaya Patra also aims to counter malnutrition and
                            support the Right to Education of children hailing from socio-economically challenging backgrounds.
                        </p>
                        <p>
                            It is our firm belief that investing in child nutrition and education is one of the most effective
                            entry points for human development. Driven by this belief, we strive to provide children with a hot,
                            nutritious and tasty mid-day meal every school day as an incentive to come to school. Thus, the vision –
                            ‘No child in India shall be deprived of education because of hunger.’
                        </p>
                        <p> Currently, we serve over 2 million children studying in 24,082 government and government-aided
                            schools and Anganwadi centres across 72 locations in 16 states and 2 union territories of India.</p>
                        <p>ADDRESS:No. 72, 3rd Floor, 3rd Main Road, 1st & 2nd Stage
                            Yeshwantpur Industrial Suburb, Rajajinagar Ward No. 10
                            Bangalore - 560022
                            Karnataka, India</p>
                        <p>CONTACT NUMBER:+91 80 3014 3400</p>
                    </div>
                    <div class="organization-images">
                        <img src="https://www.akshayapatra.org/wp-content/uploads/2023/05/Group-6829-1.png" alt="Organization 1" class="organization-image"/>
                    </div>
                </div>
                <div class="button-container">
                    <Link to="/Thankyoufood" class="Donatebutton">DONATE</Link>
                </div>

            </div>
        </div>
    );
};

export default Org1food;