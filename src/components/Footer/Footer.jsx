import React from 'react';
import "../../styles/Footer.css";
import paymentimage from "../../assets/payment.png"

import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { BsTwitterX } from "react-icons/bs";



const Footer = () => {
    return (
        <>
            <footer>

                <div className="footer-category">
                    <div className="container">
                        <h2 className="footer-category-title">Brand Directory</h2>

                        {/* Electronics Section */}
                        <div className="footer-category-box">
                            <h3 className="category-box-title">Electronics:</h3>
                            <a href="#0" className="footer-category-link">Smartphones</a>
                            <a href="#0" className="footer-category-link">Laptops</a>
                            <a href="#0" className="footer-category-link">Tablets</a>
                            <a href="#0" className="footer-category-link">Smartwatches</a>
                            <a href="#0" className="footer-category-link">Headphones</a>
                            <a href="#0" className="footer-category-link">Cameras</a>
                            <a href="#0" className="footer-category-link">Drones</a>
                            <a href="#0" className="footer-category-link">Monitors</a>
                            <a href="#0" className="footer-category-link">Printers</a>
                            <a href="#0" className="footer-category-link">Projectors</a>
                        </div>

                        {/* Home Appliances Section */}
                        <div className="footer-category-box">
                            <h3 className="category-box-title">Home Appliances:</h3>
                            <a href="#0" className="footer-category-link">Refrigerators</a>
                            <a href="#0" className="footer-category-link">Microwaves</a>
                            <a href="#0" className="footer-category-link">Washing Machines</a>
                            <a href="#0" className="footer-category-link">Air Conditioners</a>
                            <a href="#0" className="footer-category-link">Vacuum Cleaners</a>
                            <a href="#0" className="footer-category-link">Water Purifiers</a>
                            <a href="#0" className="footer-category-link">Dishwashers</a>
                        </div>

                        {/* Gaming Section */}
                        <div className="footer-category-box">
                            <h3 className="category-box-title">Gaming:</h3>
                            <a href="#0" className="footer-category-link">Gaming Consoles</a>
                            <a href="#0" className="footer-category-link">Gaming Laptops</a>
                            <a href="#0" className="footer-category-link">Controllers</a>
                            <a href="#0" className="footer-category-link">VR Headsets</a>
                            <a href="#0" className="footer-category-link">Gaming Chairs</a>
                            <a href="#0" className="footer-category-link">Graphics Cards</a>
                            <a href="#0" className="footer-category-link">Gaming Keyboards</a>
                        </div>

                        {/* Accessories Section */}
                        <div className="footer-category-box">
                            <h3 className="category-box-title">Accessories:</h3>
                            <a href="#0" className="footer-category-link">Chargers</a>
                            <a href="#0" className="footer-category-link">Power Banks</a>
                            <a href="#0" className="footer-category-link">Memory Cards</a>
                            <a href="#0" className="footer-category-link">USB Cables</a>
                            <a href="#0" className="footer-category-link">Bluetooth Speakers</a>
                            <a href="#0" className="footer-category-link">Earbuds</a>
                            <a href="#0" className="footer-category-link">Phone Cases</a>
                        </div>
                    </div>
                </div>


                <div className="footer-nav">
                    <div className="container">
                        {/* Popular Categories */}
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Popular Categories</h2>
                            </li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Smartphones</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Laptops</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Tablets</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Gaming Consoles</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Cameras</a></li>
                        </ul>

                        {/* Our Company */}
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Our Company</h2>
                            </li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Delivery</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Legal Notice</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Terms and Conditions</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">About Us</a></li>
                            <li className="footer-nav-item"><a href="#00" className="footer-nav-link">Secure Payment</a></li>
                        </ul>

                        {/* Contact Information */}
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item">
                                <h2 className="nav-title">Contact</h2>
                            </li>
                            <li className="footer-nav-item flex">
                                <div className="icon-box"><IoLocationOutline /></div>
                                <address className="content">123 Tech Street, Lagos, Nigeria</address>
                            </li>
                            <li className="footer-nav-item flex">
                                <div className="icon-box"><IoCallOutline /></div>
                                <a href="tel:+607936-8058" className="footer-nav-link">(607) 936-8058</a>
                            </li>
                            <li className="footer-nav-item flex">
                                <div className="icon-box"><IoMailOutline /></div>
                                <a href="mailto:codewhirl@gmail.com" className="footer-nav-link">codewhirl@gmail.com</a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <ul className="footer-nav-list">
                            <li className="footer-nav-item"><h2 className="nav-title">Follow Us</h2></li>
                            <li className="social-link">
                                <a href="#00" className="footer-nav-link"><AiOutlineFacebook /></a>
                                <a href="#00" className="footer-nav-link"><BsTwitterX /></a>
                                <a href="#00" className="footer-nav-link"><AiOutlineLinkedin /></a>
                                <a href="#00" className="footer-nav-link"><AiOutlineInstagram /></a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="container">
                        <img src={paymentimage} alt="payment methods" className="payment-img" />
                        <p className="copyright">© <a href="#0">SmartCart</a> all rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
