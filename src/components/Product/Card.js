import { FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useCart } from "../../Context/CartContext";
import "../../styles/Product.css";

const Card = ({ id, img, title, rating, reviews, newPrice }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents event bubbling
    addToCart({ id, title, img, price: newPrice });
  };

  const filledStars = Math.floor(rating || 0);
  const emptyStars = 5 - filledStars;

  return (
    <article className="card">
      <div className="card-img-container">
        <img src={img} alt={title} className="card-img" />
      </div>

      <div className="card-details">
        <h3 className="card-title">{title}</h3>

        <section className="card-reviews">
          {Array.from({ length: filledStars }, (_, index) => (
            <AiFillStar key={`filled-${index}`} className="filled-star" />
          ))}
          {Array.from({ length: emptyStars }, (_, index) => (
            <AiFillStar key={`empty-${index}`} className="empty-star" />
          ))}
          <span className="total-reviews">({reviews} reviews)</span>
        </section>

        <div className="card-flex">
          <span className="new-price">₦{newPrice}</span>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            <FaShoppingCart className="cart-icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;

