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
      <div className="logo-container">
        <Link to="/">
          <h1>🛒BestBuy</h1>
        </Link>
      </div>
      <div className="nav-search">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search for shoes..."
        />
      </div>
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
    </nav>
  );
};

export default Nav;
