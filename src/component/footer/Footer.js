import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

import logo from '../../images/logo.png';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Logo */}
                <div className="footer-logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <p>
                    
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-links">
                    <ul className="footer-list">
                    <h2 className='footer-heading'>Quick Links</h2>

                        <li><a href="#" className="footer-link">Home</a></li>
                        <li><a href="#" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Icons */}
                <div className="footer-social">
                    <h4 className='footer-heading'>Social Media Icons</h4>
                    <ul className="footer-list flex gap-6">
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaInstagram className='text-3xl text-red-600 ' />
                        
                        </a></li>
          
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaFacebook className='text-3xl text-blue-600 ' />
                        
                        </a></li>
                        <li><a href="mailto:someone@example.com" className="footer-link">
          <FaEnvelope className='text-3xl text-red-600 ' />
                            
                            </a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <h5 className='footer-bottom-text'>
                    JD AMBITION | Privacy Policy | Copyright (c) 2024 | Author | License | Release
                </h5>
            </div>
        </footer>
    );
};

export default Footer;
