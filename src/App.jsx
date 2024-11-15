import React from "react";
import {BrowserRouter} from "react-router-dom";
import {useState} from "react";
import {CartProvider} from "./Context/CartContext";
import IntroCarousel from "../src/components/Home/IntroCarousel";
import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import Cart from "./components/Cart/Cart";
import Recommended from "./Recommended/Recommended";
import Card from "./components/Product/Card";
import products from "./db/data";
import "./index.css";
import Featured from "./components/Featured/Featured";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [isCartVisible, setCartVisible] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const toggleCartVisibility = () => {
    setCartVisible((prevVisible) => !prevVisible);
    document.body.classList.toggle("no-scroll", !isCartVisible);
  };

  const filteredData = (products, selected, query) => {
    return products
      .filter(
        (product) =>
          (!query ||
            product.title.toLowerCase().includes(query.toLowerCase())) &&
          (!selected ||
            [
              product.category,
              product.color,
              product.company,
              product.newPrice,
              product.title,
            ].includes(selected))
      )
      .map(({id, img, title, star, reviews, prevPrice, newPrice}) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ));
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <BrowserRouter>
      <CartProvider>
        <Navigation
          query={query}
          handleInputChange={handleInputChange}
          toggleCart={toggleCartVisibility}
        />
        <IntroCarousel />
        <div className="ml-3">
          <Recommended handleClick={handleClick} />
        </div>
        <div className="control">
          <Sidebar handleChange={handleChange} />
          <Products result={result} />

          <Cart isVisible={isCartVisible} onClose={toggleCartVisibility} />
        </div>
        <Featured />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
