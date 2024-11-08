import React, { useEffect, useRef, useState } from "react";
import { useCart } from "../../Context/CartContext";
import "../../styles/Cart.css";

const Cart = ({ isVisible, onClose }) => {
    const { cart, removeFromCart, adjustQuantity } = useCart();
    const cartRef = useRef(null);
    const startY = useRef(0);

    // New state for shipping cost
    const [shippingCost, setShippingCost] = useState(0);

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isVisible]);

    // Swipe-to-close functionality
    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const difference = currentY - startY.current;

        if (difference > 100) { // Close the cart if swiped down by more than 100px
            onClose();
        }
    };

    // Handle shipping cost change
    const handleShippingChange = (e) => {
        const selectedValue = Number(e.target.value);
        setShippingCost(selectedValue);
    };

    // Calculate total cost including shipping
    const totalCost = (Number(cart.totalAmount) || 0) + shippingCost;

    return (
        <section
            ref={cartRef}
            className={`cart ${isVisible ? "show" : ""}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className="cart-content">
                {/* Left Side - Cart Items */}
                <div className="cart-items-section">
                    <div className="cart-header">
                        <h2>Shopping Cart</h2>
                        <p>{cart.items.length} Order</p>
                    </div>

                    <div className="cart-items-container">
                        <div className="cart-columns">
                            <span>Product Details</span>
                            <span>Quantity</span>
                            <span>Price</span> {/* New Price heading */}
                            <span>Total</span>
                        </div>

                        {cart.items.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cart.items.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-details">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="cart-item-img"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'path/to/placeholder.jpg';
                                            }}
                                        />
                                        <div>
                                            <h3>{item.title}</h3>
                                            <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                                        </div>
                                    </div>

                                    <div className="quantity-controls">
                                        <button onClick={() => adjustQuantity(item.id, -1)} className="quantity-btn">-</button>
                                        <span className="quantity-amount">{item.quantity}</span>
                                        <button onClick={() => adjustQuantity(item.id, 1)} className="quantity-btn">+</button>
                                    </div>

                                    {/* New Price Column */}
                                    <div className="item-price">
                                        <p>₦{(Number(item.price) || 0).toFixed(2)}</p>
                                    </div>

                                    <div className="item-total">
                                        <p>₦{(Number(item.price * item.quantity) || 0).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Right Side - Order Summary */}
                <div className="order-summary-section">
                    <h2>Order Summary</h2>
                    <p>Order: {cart.items.length}</p>
                    <p>Subtotal: ₦{(Number(cart.totalAmount) || 0).toFixed(2)}</p>

                    <div className="shipping-option">
                        <label htmlFor="shipping">Shipping:</label>
                        <select id="shipping" onChange={handleShippingChange}>
                            <option value="0">Select Shipping</option>
                            <option value="2000">Standard Delivery - ₦2000</option>
                            <option value="5000">Express Delivery - ₦5000</option>
                        </select>
                    </div>

                    <div className="promo-code">
                        <p className="promo">PROMO CODE</p>
                        <input type="text" placeholder="Enter Your Code" />
                        <button className="apply-btn">Apply</button>
                    </div>
                    <div className="cost-panel">
                        <div><p>TOTAL COST</p></div>
                        <p>₦{totalCost.toFixed(2)}</p>
                    </div>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;
