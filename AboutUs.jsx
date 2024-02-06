import React from 'react';
import './../Styles/Styles9.css'
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
            <div class="about-us-container">
        <div class="about-us-content">
            <h2>About Hunger Help</h2>
            <p>Welcome to Hunger Help, a platform dedicated to making a positive impact on the world by connecting donors
                with organizations to fight hunger. Our mission is to bring together those who want to make a difference
                and contribute to ending hunger in our communities.</p>
        </div>
        <div class="impact-images">
            <img src="https://cdn.givind.org/static/images/program/w1080/support-clothes-and-footwear-for-a-poor-orphan-child.jpg" alt="Donation Impact 1" width="500px" height="200px"/>
            <img src="https://www.heavensfamilymedia.org/ot/images/myanmar-children-eating.jpg" alt="Donation Impact 2"  width="500px" height="200px"/>
            <img src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_315,w_420/v1557425178/production/images/campaign/32300/1.orphan_children_in_joyhome_orphanage_with_new_dresses_frsuwb_1557425180.jpg" alt="Donation Impact 2"  width="500px" height="200px"/>
            <img src="https://img.huffingtonpost.com/asset/58501752120000dd00eef068.jpeg?cache=Rii2vhKjh9&ops=1778_1000" alt="Donation Impact 2"  width="500px" height="200px"/>
        </div>
        <div class="impact-images">
            <img src="https://www.newssamachar.com/wp-content/uploads/2019/11/shutterstock-1244852419.jpg" alt="Donation Impact 1" width="500px" height="200px"/>
            <img src="https://kettocdn.gumlet.io/media/campaign/705000/705058/image/636fa15caecbe.jpg?w=400&dpr=2.6" alt="Donation Impact 2"  width="500px" height="200px"/>
            <img src="https://eastasiaforum.org/wp-content/uploads/2023/03/2023-02-28T071524Z_1245917173_MT1SIPA0007XOTME_RTRMADP_3_SIPA-USA-scaled.jpg" alt="Donation Impact 2"  width="500px" height="200px"/>
            <img src="https://orphanlifefoundation.org/wp-content/uploads/2021/01/16-1-scaled.jpg" alt="Donation Impact 2"  width="500px" height="200px"/>
        </div>
    </div>
        </div>
    );
};

export default AboutUs;