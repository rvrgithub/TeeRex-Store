import React, { useState } from "react";
import "../Styles/Card.css";
export const Card = ({ data }) => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState();
  const handleChange = (id) => {
    setShow(!show);
    console.log("id", id);
  };
  return (
    <div className="card">
      <img className="cardImage" src={data.imageURL} alt="Image_error" />
      <h2>{data.name}</h2>
      <div className="price">
        <h2> Rs{data.price}</h2>

        <div
          className={!show === true ? "addToCart" : "addButton"}
          onClick={() => handleChange(data.id)}
        >
          <h3>Add To card</h3>
          {/* {!show ? <h3 >Add To card</h3> : <div>
          </div>} */}
        </div>
      </div>
    </div>
  );
};
