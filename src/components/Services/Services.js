import { Link } from "react-router-dom";
import {services} from "../../data/data";
import "./Service.css";




const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <div className="service-item">
                <div className="icon">
                  <img src={service.img} alt={service.alt} />
                </div>
                <div className="main-content">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                  <div className="main-button">
                    <Link to={`/services/${service.id}`}>Read More</Link>
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

