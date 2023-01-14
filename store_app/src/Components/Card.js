import React from "react";
import "../Styles/Card.css";
export const Card = ({ data }) => {
  console.log("data", data);
  return (
    <div className="card">
      <img className="cardImage" src={data.imageURL} alt="Image_error" />
      <h2>{data.name}</h2>
      <div className="price">
        <h2> Rs{data.price}</h2>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
