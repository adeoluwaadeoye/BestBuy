import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Testimonial.css';

import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';

const testimonials = [
  {
    quote: "Amazing quality and fast delivery!",
    author: "John Doe",
    image: avatar1,
  },
  {
    quote: "Great service and products.",
    author: "Jane Smith",
    image: avatar2,
  },
  {
    quote: "Excellent customer support and easy returns.",
    author: "Samuel Green",
    image: avatar3,
  },
  {
    quote: "Fantastic deals and reliable shipping!",
    author: "Emily Brown",
    image: avatar4,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const totalTestimonials = testimonials.length;
  const autoplayInterval = 8000;
  const autoplayRef = useRef();

  // Memoized function to go to the next slide
  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalTestimonials);
  }, [totalTestimonials]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  // Memoized function for starting autoplay
  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, autoplayInterval);
  }, [handleNext, autoplayInterval]);

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  // Autoplay effect
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay]);

  return (
    <div
      className="testimonial-slider"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <h3 className="section-heading">What Our Customers Say</h3>
      <div className="testimonial-content">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].author}
          className="testimonial-image"
        />
        <div>
        <FaQuoteLeft className="quote-icon" />
        </div>
        <p className="testimonial-text">"{testimonials[current].quote}"</p>
        <p className="testimonial-author">- {testimonials[current].author}</p>
      </div>
      <div className="testimonial-nav">
        <FaChevronLeft className="nav-icon" onClick={handlePrev} />
        <FaChevronRight className="nav-icon" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Testimonial;
