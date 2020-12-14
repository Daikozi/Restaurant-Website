import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="menu__content">
      <img src={image} alt="" className="menu__img" />
      <h3 className="menu__name">{name}</h3>
      <span className="menu__detail">{description}</span>
      <span className="menu__price">${price}</span>
      <a href="#" className="button menu__button">
        <AddShoppingCartIcon />
      </a>
    </div>
  );
};

export default MenuItem;
