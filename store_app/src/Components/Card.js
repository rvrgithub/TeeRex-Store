import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartCustumHook } from "../Context/AddToCart";
import "../Styles/Card.css";
export const Card = ({ data }) => {
  const { addToCart ,setShow } = useCartCustumHook();
  return (
    <div className="card">
      <img className="cardImage" src={data.imageURL} alt="Image_error" />
      <h2>{data.name}</h2>
      <div className="price">
        <h2> Rs{data.price}</h2>
        <div
          className={!setShow === true ? "addToCart" : "addButton"}
          onClick={() => addToCart(data.id, data)}
        >
        {/* <Link to="/shoping_cart" style={{color:"white" ,textDecoration:"none"}}> */}
         <h3>Add To card</h3> 
        {/* </Link> */}
        
        </div>
      </div>
    </div>
  );
};
};
