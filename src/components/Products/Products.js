import React, { useEffect, useState } from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  console.log(props.product);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product-container">
      <div className="card">
        <div className="padding">
          <img src={img} alt="" />
        </div>

        <div className="other-info">
          <h4>{name}</h4>
          <p>Price: $ {price}</p>
          <p>Seller: {seller}</p>
          <p>Ratting: {ratings}</p>
          <button>
            <p>Add to Card</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
