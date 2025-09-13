import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
  };

  const slides = [
    {
      img: "/images/astrology1.jpg",
      title: "Astrology & Cosmic Guidance",
      description:
        "Unlock the secrets of your destiny with personalized astrology, birth charts, and horoscope readings.",
 
    },
    {
      img: "/images/astrology2.jpg",
      title: "Soul Healing",
      description:
        "Experience deep emotional and spiritual healing to restore balance in your life.",
      
    },
    {
      img: "/images/astrology3.jpg",
      title: "Inner Child",
      description:
        "Reconnect with your inner child, heal old wounds, and rediscover joy and self-love.",
      
    },
    
  ];

  return (
    <div className="main-banner" id="top">
      <div className="container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="banner-slide">
              <img src={slide.img} alt={slide.title} className="banner-image" />

              {/* Text overlay */}
              <div className="header-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
