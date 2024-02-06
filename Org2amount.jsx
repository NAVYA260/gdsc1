import React from 'react';
import './../Styles/Styles7.css'
import { Link } from 'react-router-dom';

const Org2amount = () => {
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
                        <h2>Deepalaya Foundation</h2>
                        <p>
                            Deepalaya is an Indian non-governmental organization that aids the development of the urban and rural poor in India, with a focus on children.[1] Founded in 1979, it is headquartered in Delhi.[2] Deepalaya primarily serves the urban slums of Delhi, but also works on rural development in the states of Haryana and Uttarakhand.
                        </p>
                        <p>
                            Deepalaya's focus is on sparking sustainable development from within a community. From 2009–2010, 23.18% of Deepalaya's total income came from donations and 52.37% from government grants.[3] HSBC India also supports Deepalaya through donations and voluntary works. Deepalaya experienced US$236,741.42 in deficit for this period. Deepalaya was awarded Sat Paul Mittal Award of appreciation in 2018.

                        </p>
                        <p>
                            Currently, Deepalaya is an ISO 9001:2008 certified non – government organisation that believes in enabling self reliance and is committed to w/orking on issues affecting the urban and rural poor, with a special focus on women and children and over the years, it has established several projects in the areas of Education (Formal/Non-Formal/Remedial), Women Empowerment (reproductive health, SHG, Micro-finance), Institutional care, Community health,
                        </p>
                        <p>ADDRESS:46, Institutional Area, D Block, Janakpuri, New Delhi 110058.</p>
                        <p>CONTACT NUMBER:011-28520347, 28522263</p>
                    </div>
                    <div class="organization-images">
                        <img src="https://thamarai.org/wp-content/uploads/2022/01/homework.jpg" alt="Organization 1" class="organization-image" height="500px"/>
                    </div>
                </div>
                <div class="button-container">
                    <Link to="/AmountTransfer" class="action-button" id="proceed-button" disabled>Make Payment</Link>
                </div>

            </div>
        </div>
    );
};

export default Org2amount;