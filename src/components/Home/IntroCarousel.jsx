import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/Carousel.css";

const IntroCarousel = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Countdown Timer Logic (set 24-hour countdown)
  useEffect(() => {
    const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;
  
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  

  return (
    <section className="home" id="home">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {/* Slide 1 with Countdown Timer, Prices, and Extra Text */}
        <SwiperSlide>
          <div className="carousel-slide">
            <div className="slide-text-container">
              <h2 className="slide-heading">SHOP COMPUTERS & ACCESSORIES</h2>
              <p className="slide-paragraph">
                Get the best deals on the latest products. Don't miss out on our limited-time discounts.
              </p>
              <button className="view-more-btn">SHOP NOW</button>
            </div>
            <div className="slide-image-container">
              <img
                src="https://m.media-amazon.com/images/I/81dAe2wXIqL._AC_UL480_FMwebp_QL65_.jpg"
                alt="Product"
                className="slide-image"
              />
            </div>
            {/* Countdown Timer & Product Info */}
            <div className="product-info">
                <div className="countdown-timer">
                  <div className="time-box">{timeLeft.days}d</div>
                  <div className="time-box">{timeLeft.hours}h</div>
                  <div className="time-box">{timeLeft.minutes}m</div>
                  <div className="time-box">{timeLeft.seconds}s</div>
                </div>
                <p className="product-description">Explore the best deals and unbeatable discounts on the latest gadgets. Limited-time offers you won't want to miss!</p>
                <div className="price-section">
                  <p className="new-prices">₦35,000</p>
                  <p className="old-price">₦50,000</p>
                </div>
              </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Normal Slide */}
        <SwiperSlide>
          <div className="carousel-slide">
            <div className="slide-text-container">
              <h2 className="slide-heading">SHOP COMPUTERS & ACCESSORIES</h2>
              <p className="slide-paragraph">
                Get the best deals on the latest products. Don't miss out on our limited-time discounts.
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
            <div className="product-info">
              <div className="countdown-timer">
                <div className="time-box">{timeLeft.days}d</div>
                <div className="time-box">{timeLeft.hours}h</div>
                <div className="time-box">{timeLeft.minutes}m</div>
                <div className="time-box">{timeLeft.seconds}s</div>
              </div>
              <p className="product-description">Explore the best deals and unbeatable discounts on the latest gadgets. Limited-time offers you won't want to miss!</p>
              <div className="price-section">
                <p className="new-prices">₦35,000</p>
                <p className="old-price">₦50,000</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 with Prices and Countdown */}
        <SwiperSlide>
          <div className="carousel-slide">
            <div className="slide-text-container">
              <h2 className="slide-heading">Electronics at Unbeatable Prices</h2>
              <p className="slide-paragraph">Explore our new arrivals and find your perfect match.</p>
              <button className="view-more-btn">SHOP NOW</button>
            </div>
            <div className="slide-image-container">
              <img
                src="https://m.media-amazon.com/images/I/71BpUJ09GtL._AC_UY327_FMwebp_QL65_.jpg"
                alt="Product"
                className="slide-image"
              />
            </div>

            {/* Countdown Timer & Product Info */}
            <div className="product-info">
              <div className="countdown-timer">
                <div className="time-box">{timeLeft.days}d</div>
                <div className="time-box">{timeLeft.hours}h</div>
                <div className="time-box">{timeLeft.minutes}m</div>
                <div className="time-box">{timeLeft.seconds}s</div>
              </div>
              <p className="product-description">Explore the best deals and unbeatable discounts on the latest gadgets. Limited-time offers you won't want to miss!</p>
              <div className="price-section">
                <p className="new-prices">₦35,000</p>
                <p className="old-price">₦50,000</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default IntroCarousel;
