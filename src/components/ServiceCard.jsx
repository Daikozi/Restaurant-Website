import React from "react";

const ServiceCard = ({ image, title, text }) => {
  console.log(image);
  return (
    <div className="services__content">
      <svg>{image}</svg>
      <h3 className="services__title">{title}</h3>
      <p className="services__description">{text}</p>
    </div>
  );
};

export default ServiceCard;
