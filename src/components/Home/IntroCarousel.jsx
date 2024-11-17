import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/Carousel.css";


const IntroCarousel = () => {
  return (
    <section className="home" id="home">
      <Swiper
        modules={[Autoplay]} // Ensure Navigation is in modules
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="carousel-slide">
            <div className="slide-text-container">
              <h2 className="slide-heading">SHOP COMPUTERS & ACCESSORIES</h2>
              <p className="slide-paragraph">
                Get the best deals on the latest products. Don't miss out on our
                limited-time discounts.
              </p>
              <button className="view-more-btn">SHOP NOW</button>
            </div>
            <div className="slide-image-container">
              <img
                src="https://m.media-amazon.com/images/I/61tSuIV9mML._AC_UY327_FMwebp_QL65_.jpg"
                alt="Product"
                className="slide-image"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-slide">
            <div className="slide-text-container">
              <h2 className="slide-heading">SHOP COMPUTERS & ACCESSORIES</h2>
              <p className="slide-paragraph">
                Get the best deals on the latest products. Don't miss out on our
                limited-time discounts.
              </p>
              <button className="view-more-btn">SHOP NOW</button>
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
              <h2 className="slide-heading">Electronics at Unbeatable Prices </h2>
              <p className="slide-paragraph">
                Explore our new arrivals and find your perfect match. Fresh styles
                now available!
              </p>
              <button className="view-more-btn">SHOP NOW</button>
            </div>
            <div className="slide-image-container">
              <img
                src="https://m.media-amazon.com/images/I/71BpUJ09GtL._AC_UY327_FMwebp_QL65_.jpg"
                alt="Product"
                className="slide-image"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide">
            <div className="slide-text-container">
              <h2 className="slide-heading">Shop Latest Gadgets Today</h2>
              <p className="slide-paragraph">
                Explore our new arrivals and find your perfect match. Fresh styles
                now available!
              </p>
              <button className="view-more-btn">SHOP NOW</button>
            </div>
            <div className="slide-image-container">
              <img
                src="https://m.media-amazon.com/images/I/71y9SgG-XaS._AC_UL480_FMwebp_QL65_.jpg"
                alt="Product"
                className="slide-image rotate"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-slide">
            <div className="slide-text-container">
              <h2 className="slide-heading">Experience the Future Electronics</h2>
              <p className="slide-paragraph">
                Explore our new arrivals and find your perfect match. Fresh styles
                now available!
              </p>
              <button className="view-more-btn">SHOP NOW</button>
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

      </Swiper>
    </section>

  );
};

export default IntroCarousel;

