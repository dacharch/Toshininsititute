import React from "react";
import "./Service.css";

const services = [
  {
    img: "/images/service-01.png", // ✅ from public/images
    alt: "online degrees",
    title: "Online Degrees",
    desc: "Whenever you need free templates in HTML CSS, you just remember TemplateMo website.",
    link: "#",
  },
  {
    img: "/images/service-02.png",
    alt: "short courses",
    title: "Short Courses",
    desc: "You can browse free templates based on different tags such as digital marketing, etc.",
    link: "#",
  },
  {
    img: "/images/service-03.png",
    alt: "web experts",
    title: "Web Experts",
    desc: "You can start learning HTML CSS by modifying free templates from our website too.",
    link: "#",
  },
];

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <img src={service.img} alt={service.alt} />
                </div>
                <div className="main-content">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                  <div className="main-button">
                    <a href={service.link}>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
