// import React from "react";
// import { Link } from "react-router-dom"; // Import Link
// import { useCart } from "../../Context/CartContext";
// import { FiHeart } from "react-icons/fi";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import "../../styles/Nav.css";

// const Nav = ({ handleInputChange, query, toggleCart }) => {
//   const { cart } = useCart(); // Access the cart from context

//   return (
//     <nav className="navbar">
//       {/* Logo Section */}
//       <div className="logo-container">
//         <Link to="/">
//           <h1>🛒Xstore</h1>
//         </Link>
//       </div>

//       {/* Search Input Section */}
//       <div className="nav-search">
//         <input
//           className="search-input"
//           type="text"
//           onChange={handleInputChange}
//           value={query}
//           placeholder="Search for shoes..."
//         />
//       </div>

//       {/* Icons Section */}
//       <div className="nav-icons-container">
//         {/* Wishlist Icon */}
//         <Link to="/wishlist" className="nav-link">
//           <FiHeart className="nav-icon" title="Wishlist" />
//         </Link>

//         {/* User Profile Icon */}
//         <Link to="/user" className="nav-link">
//           <AiOutlineUserAdd className="nav-icon" title="User Profile" />
//         </Link>

//         {/* Cart Icon with Badge */}
//         <Link to="/cart" className="cart-icon-container" onClick={toggleCart}>
//           <MdOutlineShoppingBag className="nav-icon" title="Cart" />
//           {cart.totalQuantity > 0 && (
//             <span className="cart-count">{cart.totalQuantity}</span>
//           )}
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

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
          <h1>🛒Xstore</h1>
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
          <FiHeart className="nav-icon" title="Wishlist" />
        </Link>
        <Link to="/user" className="nav-link">
          <AiOutlineUserAdd className="nav-icon" title="User Profile" />
        </Link>
        <Link to="/cart" className="cart-icon-container" onClick={toggleCart}>
          <MdOutlineShoppingBag className="nav-icon" title="Cart" />
          {cart.totalQuantity > 0 && (
            <span className="cart-count">{cart.totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
