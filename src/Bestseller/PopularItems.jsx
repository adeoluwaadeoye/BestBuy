import React, { useState } from "react";
import "../styles/PopularItems.css"; // Add CSS from below

const PopularItems = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Laptop.png",
      title: "Newest Gaming Laptop, Laptop with AMD ",
      description: "No featured offers available.",
      price: "₦120,000",
    },
    {
      img: "https://m.media-amazon.com/images/I/719XvPvIS9L._AC_UY327_FMwebp_QL65_.jpg",
      title: "Smart LED Screen",
      description: "Control your lighting from anywhere with your smartphone.",
      price: "₦59,500",
    },
    {
      img: "https://m.media-amazon.com/images/I/61teHXr3vDL._AC_UY327_FMwebp_QL65_.jpg",
      title: "Oculus",
      description: "Portable, high-quality sound wherever you go.",
      price: "₦98,000",
    },
  ];

  return (
    <div className="popular-items">
      <h4>Popular Items</h4>
      <div className="items-grid">
        {products.map((product, index) => (
          <div
            className="item"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={product.img} alt={product.title} />
            <div
              className={`product-details ${hoveredIndex === index ? "show" : ""}`}
            >
              <h5>{product.title}</h5>
              <p>{product.description}</p>
              <span className="price-tag">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
