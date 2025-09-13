import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    text: `“I had tried hynotherapy before, but my session with Ronak Agarwal was unlike anything I had experienced. I approached him when I was feeling extremely anxious and disturbed.After just one session, I felt completely calm and clear. What stood out the most was the deep sense of trust and comfort I felt during the session. I recommend everyone to visit him atleast once.”`,
    image: "assets/images/testimonial-author.jpg",
    // category: "Full Stack Master",
    // name: "Claude David",
  },
  // {
  //   text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid.”`,
  //   image: "assets/images/testimonial-author.jpg",
  //   category: "UI Expert",
  //   name: "Thomas Jefferson",
  // },
  // {
  //   text: `“Scholar is free website template provided by TemplateMo for educational related websites. This CSS layout is based on Bootstrap v5.3.0 framework.”`,
  //   image: "assets/images/testimonial-author.jpg",
  //   category: "Digital Animator",
  //   name: "Stella Blair",
  // },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="testimonials testimonials-banner">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <p className="testimonial-text">{item.text}</p>
              <div className="author-info">
                <img src={item.image} alt={item.name} className="author-image" />
                <div className="author-details">
                  <span className="category">{item.category}</span>
                  <h4 className="author-name">{item.name}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
