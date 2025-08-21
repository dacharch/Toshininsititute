import React from 'react';
import "./Testimonials.css"

const testimonials = [
  {
    text: `“Please tell your friends or colleagues about TemplateMo website. Anyone can access the website to download free templates. Thank you for visiting.”`,
    image: 'assets/images/testimonial-author.jpg',
    category: 'Full Stack Master',
    name: 'Claude David',
  },
  {
    text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravid.”`,
    image: 'assets/images/testimonial-author.jpg',
    category: 'UI Expert',
    name: 'Thomas Jefferson',
  },
  {
    text: `“Scholar is free website template provided by TemplateMo for educational related websites. This CSS layout is based on Bootstrap v5.3.0 framework.”`,
    image: 'assets/images/testimonial-author.jpg',
    category: 'Digital Animator',
    name: 'Stella Blair',
  },
];

const Testimonials = () => {
  return (
    <div className="section testimonials">
      <div className="container">
        <div className="row">
          {/* Carousel / Left side */}
          <div className="col-lg-7">
            <div className="owl-carousel owl-testimonials">
              {testimonials.map((item, index) => (
                <div className="item" key={index}>
                  <p>{item.text}</p>
                  <div className="author">
                    <img src={item.image} alt={item.name} />
                    <span className="category">{item.category}</span>
                    <h4>{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right-side content */}
          <div className="col-lg-5 align-self-center">
            <div className="section-heading">
              <h6>TESTIMONIALS</h6>
              <h2>What they say about us?</h2>
              <p>
                You can search free CSS templates on Google using different keywords such as templatemo portfolio,
                templatemo gallery, templatemo blue color, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
