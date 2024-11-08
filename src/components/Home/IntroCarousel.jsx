import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";

// Import Swiper styles
import "../../styles/Carousel.css";

const IntroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{delay: 5000}}
      navigation
    >
      <SwiperSlide>
        <div className="carousel-slide">
          <div className="slide-text-container">
            <h2 className="slide-heading">SHOP COMPUTERS & ACCESSORIES</h2>
            <p className="slide-paragraph">
              Get the best deals on the latest products. Don't miss out on our
              limited-time discounts.
            </p>
            <button className="view-more-btn">View More</button>
          </div>
          <div className="slide-image-container">
            <img
              src="https://m.media-amazon.com/images/I/81oHvJt634L._AC_UL480_FMwebp_QL65_.jpg"
              alt="Product"
              className="slide-image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-slide">
          <div className="slide-text-container">
            <h2 className="slide-heading">New Collection</h2>
            <p className="slide-paragraph">
              Explore our new arrivals and find your perfect match. Fresh styles
              now available!
            </p>
            <button className="view-more-btn">View More</button>
          </div>
          <div className="slide-image-container">
            <img
              src="https://m.media-amazon.com/images/I/51jKdIMGCsL._AC_UY327_FMwebp_QL65_.jpg"
              alt="Product"
              className="slide-image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-slide">
          <div className="slide-text-container">
            <h2 className="slide-heading">New Collection</h2>
            <p className="slide-paragraph">
              Explore our new arrivals and find your perfect match. Fresh styles
              now available!
            </p>
            <button className="view-more-btn">View More</button>
          </div>
          <div className="slide-image-container">
            <img
              src="https://m.media-amazon.com/images/I/71VqeDv2SWL._AC_UY327_FMwebp_QL65_.jpg"
              alt="Product"
              className="slide-image"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-slide">
          <div className="slide-text-container">
            <h2 className="slide-heading">New Collection</h2>
            <p className="slide-paragraph">
              Explore our new arrivals and find your perfect match. Fresh styles
              now available!
            </p>
            <button className="view-more-btn">View More</button>
          </div>
          <div className="slide-image-container">
            <img
              src="https://m.media-amazon.com/images/I/81p9DPknjLL._AC_UL480_FMwebp_QL65_.jpg"
              alt="Product"
              className="slide-image"
            />
          </div>
        </div>
      </SwiperSlide>
      {/* More SwiperSlides as needed */}
    </Swiper>
  );
};

export default IntroCarousel;
