import React, { useState, useEffect } from 'react';
import '../styles/Bestseller.css';
import { FaShippingFast, FaLock, FaRegClock } from 'react-icons/fa';
import data from '../db/BestSellerData';
import { useCart } from '../Context/CartContext';
import Testimonial from '../Bestseller/TestimonialSlider';
import PopularItems from './PopularItems';


const Bestseller = () => {
    const { addToCart } = useCart();

    // Countdown timer for Deal of the Week
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const targetDate = new Date().setDate(new Date().getDate() + 7); // 7 days countdown
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bestseller-container">
            {/* Sidebar */}
            <aside className="sidebar-bestseller">
                {/* Part 1: Shipping Info */}
                <div className="shipping-info sidebar-top">
                    {/* Free Shipping */}
                    <div className="info-block">
                        <FaShippingFast className="icon-set" />
                        <div className="info-text">
                            <h4>Free Shipping</h4>
                            <p>Enjoy free nationwide delivery on all orders above ₦50,000. Shop now and save on shipping costs!</p>
                        </div>
                    </div>

                    {/* Secure Payment */}
                    <div className="info-block">
                        <FaLock className="icon-set" />
                        <div className="info-text">
                            <h4>Secure Payment</h4>
                            <p>Experience a 100% secure checkout process with encrypted transactions for total peace of mind.</p>
                        </div>
                    </div>

                    {/* Estimated Return Days */}
                    <div className="info-block">
                        <FaRegClock className="icon-set" />
                        <div className="info-text">
                            <h4>Estimated Return</h4>
                            <p>Enjoy hassle-free returns within 30 days. If you're not satisfied, we'll make it right—quickly and easily.</p>
                        </div>
                    </div>
                </div>



                {/* Part 2: Testimonials */}
                <div className="testimonial-section">
                    <Testimonial />
                </div>

                {/* Part 3: Deal of the Week */}
                <div className="deal-of-week">
                    <h3 className="section-heading">Deal of the Week</h3>

                    {/* Catchy description before the image */}
                    <p className="product-description">Grab the ultimate gaming experience with the Xbox Console – your next level of entertainment!</p>

                    {/* Add product image using image link */}
                    <div className="deal-image">
                        <img src="https://m.media-amazon.com/images/I/61N9cUK98eL._AC_UY327_FMwebp_QL65_.jpg" alt="Deal of the Week" />
                    </div>

                    <div className="countdown">
                        <p>{timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s</p>
                    </div>

                    <div className="deal-btn-container">
                        <button className="deal-btn">Shop Now</button>
                    </div>
                </div>


            </aside>

            {/* Main Section */}
            <main className="main-content">
                {/* Left: 2x2 Products Grid */}
                <div className="products-grid">
                    {data.slice(0, 30).map((item) => (
                        <div key={item.id} className="product-card">
                            <img src={item.img} alt={item.title} className="product-image" />
                            <h2 className="product-brand">{item.brand}</h2>
                            <h3 className="product-title">{item.title}</h3>
                            <p className="product-price">₦{item.newPrice}</p>
                            <button className="add-to-cart" onClick={() => addToCart(item)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                {/* Right: Placeholder Content */}
                <div className="right-content">
                    <h3>Special Offer</h3>
                    <p>Get 20% off on your next purchase!</p>

                    <img
                        src="https://m.media-amazon.com/images/I/51qzGR9kymL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        alt="Special Offer"
                        className="offer-image"
                    />

                    <img
                        src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/85604888-d09e-4925-b914-82d7b2de7a3e.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                        alt="Special Offer"
                        className="offer-image-banner"
                    />

                    <img
                        src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/344ba63c-477f-4c12-a775-af51d8c81a56.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                        alt="Special Offer"
                        className="offer-image-banner"
                    />
                    <img
                        src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/9019a4da-d98a-4e20-b31c-4383a37c4b79.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                        alt="Special Offer"
                        className="offer-image-banner"
                    />

                    {/* Countdown Timer */}
                    <div className="countdown">
                        <h4>Offer ends in:</h4>
                        <div className="timer">
                            <span>03</span>:<span>12</span>:<span>45</span>
                        </div>
                    </div>

                    {/* Testimonial Section */}
                    <div className="testimonial">
                        <h4>What our customers say</h4>
                        <p>"I love the quality of these products! The offer helped me save a lot!"</p>
                        <span>- John Umoh</span>
                    </div>


                    {/* Call-to-Action Button */}
                    <div className="cta">
                        <button className="shop-now">Shop Now</button>
                    </div>


                    {/* Product Recommendations */}
                    <div className="product-recommendations">
                        <h4>Other Items to Consider</h4>
                        <div className="recommended-items">
                            <img src="https://m.media-amazon.com/images/I/61Dq66zEttL._AC_UY327_FMwebp_QL65_.jpg" alt="Recommended Product 2" />
                            <img src="https://m.media-amazon.com/images/I/7113LuUzdBL._AC_UY327_FMwebp_QL65_.jpg" alt="Recommended Product 3" />
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="video-section">
                        <h4>See the product in action!</h4>
                        <video controls>
                            <source src="https://m.media-amazon.com/images/S/aplus-media/sc/887a712c-86e6-4855-bbce-07bc0d2c9e10.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Brand Partnerships */}
                    <div className="brand-partners">
                        <h4>Our Brand Partners</h4>
                        <div className="partners-logos">
                            <img src="https://cdn-icons-png.flaticon.com/128/1724/1724620.png" alt="HP" />
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183557.png" alt="Acer" />
                            <img src="https://cdn-icons-png.flaticon.com/128/882/882722.png" alt="LG" />
                            <img src="https://cdn-icons-png.flaticon.com/128/588/588257.png" alt="Xbox" />
                            <img src="https://cdn-icons-png.flaticon.com/128/588/588337.png" alt="Sony" />
                            <img src="https://cdn-icons-png.flaticon.com/128/882/882747.png" alt="Samsung" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1240/1240942.png" alt="Apple" />
                            <img src="https://cdn-icons-png.flaticon.com/128/882/882726.png" alt="Dell" />
                            <img src="https://cdn-icons-png.flaticon.com/128/588/588258.png" alt="PS" />
                            <img src="https://cdn-icons-png.flaticon.com/128/882/882738.png" alt="Huawei" />
                            <img src="https://cdn-icons-png.flaticon.com/128/732/732221.png" alt="Microsoft" />
                            <img src="https://cdn-icons-png.flaticon.com/128/882/882744.png" alt="Asus" />
                        </div>
                    </div>


                    {/* Featured Blog Posts */}
                    <div className="blog-highlights">
                        <h4>Latest Blog Highlights</h4>
                        <div className="blog-post">
                            <img src="https://m.media-amazon.com/images/I/41VpCEZSRjL._AC_UY327_FMwebp_QL65_.jpg" alt="Blog Post" />
                            <h5>Top 5 Tech Gadgets of 2024</h5>
                            <p>Discover the best tech gadgets to enhance your productivity this year.</p>
                            <button className="read-more">Read More</button>
                        </div>

                        <div className="blog-post">
                            <img src="https://images.unsplash.com/photo-1563628631561-cc80533f6826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG9mZmljZSUyMHNldHVwJTIwYW5kJTIwZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D" alt="Blog Post" />
                            <h5>How to Set Up Your Home Office</h5>
                            <p>Transform your space into a perfect work-from-home setup.</p>
                            <button className="read-more">Read More</button>
                        </div>

                        <div className="blog-post">
                            <img src="https://m.media-amazon.com/images/I/61sgFxYmloL._AC_UY327_FMwebp_QL65_.jpg" alt='blog post' />
                            <h5>Adavanced electroics gadgets just for you</h5>
                            <p>Discover the best tech gadgets to enhance your productivity this year.</p>
                            <button className="read-more">Read More</button>
                        </div>
                    </div>

                    {/* Quick Tips Section */}
                    <div className="quick-tips">
                        <h4>Quick Shopping Tips</h4>
                        <ul>
                            <li>Always compare prices before purchasing.</li>
                            <li>Look out for seasonal sales to save money.</li>
                            <li>Subscribe to newsletters for exclusive discounts.</li>
                        </ul>

                        {/* Newsletter Subscription */}
                        <div className="newsletter">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email"
                                className="newsletter-input"
                            />
                            <button className="subscribe-button">Subscribe</button>
                        </div>
                    </div>


                    {/* Featured Products Section */}
                    <div className="featured-products-container">
                        <h4>Featured Products</h4>
                        <div className="featured-item">
                            <img src="https://m.media-amazon.com/images/I/71P1MZ8ztDL._AC_UY327_FMwebp_QL65_.jpg" alt="Featured Item" />
                            <h5>4K Ultra HD Monitor</h5>
                            <p>Enhance your viewing experience with stunning clarity.</p>
                            <span className="price-tag">₦120,000</span>
                            <button className="featured-buy">Buy Now</button>
                        </div>
                        <div className="featured-item">
                            <img src="https://m.media-amazon.com/images/I/7134j-mANFL._AC_UY327_FMwebp_QL65_.jpg" alt="Featured Item" />
                            <h5>Wireless Gaming Mouse</h5>
                            <p>Get precision control with zero lag.</p>
                            <span className="price-tag">₦25,000</span>
                            <button className="featured-buy">Buy Now</button>
                        </div>
                    </div>

                    {/* Frequently Asked Questions */}
                    <div className="faq-section">
                        <h4>Frequently Asked Questions</h4>
                        <div className="faq-item">
                            <h5>What is your return policy?</h5>
                            <p>We offer a 30-day return policy on all products. Please ensure items are in original condition.</p>
                        </div>
                        <div className="faq-item">
                            <h5>How can I track my order?</h5>
                            <p>Use the tracking ID sent via email to monitor your delivery status online.</p>
                        </div>
                    </div>

                    <PopularItems />

                </div>


            </main>
        </div>
    );
};

export default Bestseller;
