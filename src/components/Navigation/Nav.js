import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import "../../styles/Nav.css";

const Nav = ({ handleInputChange, query, toggleCart }) => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      {/* Top Navigation Bar */}
      <div className="nav-top">
        <div className="nav-top-content">
          {/* Contact Information */}
          <span className="contact-info">
            📞 Call us: +234 (234) 567-8900 | ✉️ Email: support@bestbuy.com
          </span>
          {/* Promotional Banner */}
          <span className="promo-banner">
            🎉 Free shipping on orders over ₦100,000!
          </span>
          {/* Support Links */}
          <div className="support-links">
            <Link to="/faq" className="top-link">FAQs</Link>
            <Link to="/support" className="top-link">Support</Link>
            <Link to="/track-order" className="top-link">Track Order</Link>
          </div>
        </div>
      </div>

      <div className="nav-bottom">

        {/* Logo */}
        <div className="logo-container">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <h1>🛒BestBuy</h1>
          </Link>
        </div>

        {/* Search Input */}
        <div className="nav-search">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Search for shoes..."
          />
        </div>

        {/* Navigation Icons */}
        <div className="nav-icons-container">
          <Link to="/wishlist" className="nav-link">
            <FiHeart className="navigation-icon" title="Wishlist" />
          </Link>
          <Link to="/user" className="navigation-link">
            <AiOutlineUserAdd className="navigation-icon" title="User Profile" />
          </Link>
          <Link to="/cart" className="cart-icon-container" onClick={toggleCart}>
            <MdOutlineShoppingBag className="navigation-icon" title="Cart" />
            {cart.totalQuantity > 0 && (
              <span className="cart-count">{cart.totalQuantity}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
