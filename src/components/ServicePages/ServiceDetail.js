import React from "react";
import { useParams } from "react-router-dom";
import { serviceDescription } from "../../data/data";
import Footer from "../Footer/Footer.js";
import "./ServiceDetail.css";
import ServiceHeader from "../ServiceHeader/ServiceHeader.js";

const ServiceDetail = () => {
  const { id } = useParams();

  const serviceDes = serviceDescription.find((s) => s.id === id);

  if (!serviceDes) {
    return (
      <h2 className="text-center text-xl font-semibold mt-10">
        Service not found
      </h2>
    );
  }

  // Split description into paragraphs
  const descriptionLines = serviceDes.description.split("\n");

  return (
    <>
     <ServiceHeader/>
      <div className="main_container">
        <div className="box-container">
          <h3>{serviceDes.title}</h3>
          {descriptionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
