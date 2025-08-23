import React from "react";
import "./Service.css";

const services = [
  { img: "/images/service-01.png", alt: "service", title: "Transpersonal Regression", desc: "Explore past life memories to gain personal insights.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Hypnotherapy", desc: "Transform your mindset and overcome limiting habits.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Tarot Card Reading", desc: "Receive guidance and clarity through tarot insights.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Angel Card Reading", desc: "Connect with angels for inspiration and support.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Soul Healing", desc: "Heal emotional wounds and restore inner peace.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Family & Professional Constellations", desc: "Resolve family and work dynamics effectively.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Astrology", desc: "Understand life patterns through your birth chart.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Financial Growth Therapy", desc: "Unlock your potential for wealth and success.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Numerology", desc: "Discover your life path through numbers.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Graphology", desc: "Analyze handwriting to reveal personality traits.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Vastu", desc: "Bring harmony and balance to your living spaces.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Inner Child Healing", desc: "Reconnect with your inner child to release trauma.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Past Life Therapy", desc: "Explore past experiences to resolve present issues.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Ancestral Healing", desc: "Heal generational patterns affecting your life.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Accident Trauma Release", desc: "Release emotional blocks from past accidents.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Surgical Trauma Release", desc: "Heal lingering stress from previous surgeries.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Crystal Healing", desc: "Balance energy and promote wellness with crystals.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Aura & Chakra Balancing", desc: "Restore energy flow for physical and mental balance.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Reiki", desc: "Harness universal energy to heal and relax.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Pranic Healing", desc: "Cleanse and energize your aura for better health.", link: "#" },
  { img: "/images/service-01.png", alt: "service", title: "Relationship Counseling", desc: "Improve communication and strengthen bonds.", link: "#" },
];

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
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
