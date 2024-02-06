import React from 'react';
import './../Styles/Styles1.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="homepage" style={{ backgroundImage: 'url("https://bbsat.files.wordpress.com/2012/01/img_40201.jpg")', backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="logo">Hunger Help</div>
            <div className="introduction">
                <h1>Hunger Help</h1>
                <p>Welcome to Hunger Help, where we connect donors with organizations to fight hunger and education and make a positive impact on the world. Join us in our mission to make a difference!</p>
            </div>
            <div className="buttons-container">
                <Link to="/register" className="register-button">Register</Link>
                <Link to="/login" className="login-button">Login</Link>
            </div>
        </div>
    );
};

export default Home;