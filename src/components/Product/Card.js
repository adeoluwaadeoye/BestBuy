import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/CartContext";
import { AiFillStar } from "react-icons/ai";

const Card = ({ id, img, title, rating, reviews, prevPrice, newPrice }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, img, price: newPrice });
  };

  const filledStars = Math.floor(rating || 0);
  const emptyStars = 5 - filledStars;

  return (
    <section className="card">
      <div className="card-img-container">
        <img src={img} alt={title} className="card-img" />
      </div>

      <div className="card-details">
        <div className="card-flex">
          <h3 className="card-title">{title}</h3>
        </div>

        <section className="card-reviews">
          {/* Display filled stars with inline color */}
          {Array.from({ length: filledStars }, (_, index) => (
            <AiFillStar key={`filled-${index}`} className="filled-star" />
          ))}
          {Array.from({ length: emptyStars }, (_, index) => (
            <AiFillStar key={`empty-${index}`} className="empty-star" />
          ))}

          <span className="total-reviews">{reviews} reviews</span>
        </section>

        <div className="card-flex">
          <span className="new-price">₦{newPrice}</span>
          <section className="card-price">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              <FaShoppingCart className="cart-icon" />
              Add to Cart
            </button>
          </section>
        </div>

      </div>
    </section>
  );
};

export default Card;
