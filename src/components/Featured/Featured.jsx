import React from 'react';
import data from '../../db/data';
import "../../styles/Featured.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../../Context/CartContext';

const Featured = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (e, item) => {
        e.stopPropagation(); // Prevents event bubbling
        addToCart({ id: item.id, title: item.title, img: item.img, price: item.newPrice });
    };

    return (
        <div className="featured-container">
            <h2 className='double-line heading'>Featured Products</h2>

            {/* Top 5 Products */}
            <div className="product-gallery">
                {data.slice(2, 8).map((item) => (
                    <article key={item.id} className="product-card">
                        <img src={item.img} alt={item.title} className="product-image" />
                        <h2 className="product-title">{item.title}</h2>
                        <div className='control'>
                        <p className="product-company">Brand: {item.company}</p>
                        <p className="product-price">₦{item.newPrice}</p>
                        </div>
                        <div className='gallery-btm'>
                            <button 
                                onClick={(e) => handleAddToCart(e, item)} 
                                className="add-to-cart"
                            >
                                <FaShoppingCart className="cart-icon" />
                                Add to Cart
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {/* Bottom 2 Featured Products with alternating text and image positions */}
            <div className="featured-products-wrapper">
                {data.slice(7, 9).map((item, index) => (
                    <article
                        key={item.id}
                        className={`featured-product ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                    >
                        {/* Conditional layout based on index */}
                        {index % 2 === 0 ? (
                            <>
                                <div className="featured-details">
                                    <h3 className="featured-title">New Series: {item.title}</h3>
                                    <h5 className='small'>Exclusive Savings</h5>
                                    <p className="featured-price">₦{item.newPrice}</p>
                                </div>
                                <img src={item.img} alt={item.title} className="featured-image" />
                            </>
                        ) : (
                            <>
                                <img src={item.img} alt={item.title} className="featured-image" />
                                <div className="featured-details">
                                    <h3 className="featured-title">New Series: {item.title}</h3>
                                    <h5 className='small'>The power of light</h5>
                                    <p className="featured-price">₦{item.newPrice}</p>
                                </div>
                            </>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Featured;
